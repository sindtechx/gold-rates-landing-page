import { NextResponse } from 'next/server';

const GOLD_RETAIL_API =
  'https://dmu-api.gulfnews.com/v2/gn-feeds/data/gold-retail.json';

interface CaratRates {
  yesterday: string | number;
  morning: string | number;
  afternoon?: string | number;
}

interface RawData {
  carat14?: CaratRates;
  carat18: CaratRates;
  carat21: CaratRates;
  carat22: CaratRates;
  carat24: CaratRates;

  SAU: Record<string, CaratRates>;
  QAT: Record<string, CaratRates>;
  KWT: Record<string, CaratRates>;
  BHR: Record<string, CaratRates>;
  OMN: Record<string, CaratRates>;
  IND: Record<string, CaratRates>;

  lastUpdated: string;
}

function toNumber(value: string | number | undefined): number | null {
  if (value === undefined || value === null || value === '') {
    return null;
  }

  const number = Number(value);

  return Number.isFinite(number) ? number : null;
}

function transformRates(data: RawData) {
  const transformed: Record<string, unknown> = {};

  const caratMapping: Record<string, string> = {
    carat24: '24K',
    carat22: '22K',
    carat21: '21K',
    carat18: '18K',
    carat14: '14K',
  };

  for (const [key, label] of Object.entries(caratMapping)) {
    const rates = data[key as keyof RawData] as CaratRates | undefined;

    // Some carats may not exist in the API response.
    if (!rates) {
      continue;
    }

    transformed[label] = {
      yesterday: toNumber(rates.yesterday),
      morning: toNumber(rates.morning),
      afternoon: toNumber(rates.afternoon),
    };
  }

  transformed.updated = data.lastUpdated;

  return transformed;
}

export async function GET() {
  try {
    const response = await fetch(GOLD_RETAIL_API, {
      next: {
        revalidate: 300, // Cache for 5 minutes
      },
    });

    // Handle upstream API errors
    if (!response.ok) {
      const errorBody = await response.text().catch(() => '');

      console.error('Gulf News API error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorBody,
      });

      return NextResponse.json(
        {
          error: 'Failed to fetch gold rates',
          upstreamStatus: response.status,
        },
        { status: 502 }
      );
    }

    // Parse JSON
    const data: RawData = await response.json();

    // Basic validation
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid response from Gulf News gold API');
    }

    if (!data.carat24 || !data.carat22 || !data.carat21 || !data.carat18) {
      throw new Error('Required gold carat data is missing from API response');
    }

    // Transform API response
    const transformed = transformRates(data);

    return NextResponse.json(transformed, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Error fetching gold rates:', error);

    return NextResponse.json(
      {
        error: 'Internal server error',
        details:
          error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
