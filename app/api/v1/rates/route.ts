import { NextResponse } from 'next/server';

const GOLD_RETAIL_API = 'https://dmu-api.gulfnews.com/v2/gn-feeds/data/gold-retail.json';

interface CaratRates {
  yesterday: string | number;
  morning: string | number;
  afternoon: string | number;
}

interface RawData {
  carat18: CaratRates;
  carat21: CaratRates;
  carat22: CaratRates;
  carat24: CaratRates;
  SAU: { [key: string]: CaratRates };
  QAT: { [key: string]: CaratRates };
  KWT: { [key: string]: CaratRates };
  BHR: { [key: string]: CaratRates };
  OMN: { [key: string]: CaratRates };
  IND: { [key: string]: CaratRates };
  lastUpdated: string;
}

function transformRates(data: RawData) {
  const transformed: any = {};

  // Transform UAE rates (top-level carat data) - default country
  const caratMapping: { [key: string]: string } = {
    carat24: '24K',
    carat22: '22K',
    carat21: '21K',
    carat18: '18K'
  };

  for (const [key, label] of Object.entries(caratMapping)) {
    const rates = data[key as keyof RawData] as CaratRates;
    transformed[label] = {
      yesterday: parseFloat(rates.yesterday.toString()),
      morning: parseFloat(rates.morning.toString()),
      afternoon: parseFloat(rates.afternoon.toString())
    };
  }

  return transformed;
}

export async function GET() {
  try {
    const response = await fetch(GOLD_RETAIL_API, {
      next: { revalidate: 300 } // Cache for 5 minutes
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch gold rates' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const transformed = transformRates(data);

    return NextResponse.json(transformed);
  } catch (error) {
    console.error('Error fetching gold rates:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
