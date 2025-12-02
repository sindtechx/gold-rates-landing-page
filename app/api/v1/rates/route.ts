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
  const transformed: any = {
    UAE: {}
  };

  // Transform UAE rates (top-level carat data)
  const caratMapping: { [key: string]: string } = {
    carat24: '24K',
    carat22: '22K',
    carat21: '21K',
    carat18: '18K'
  };

  for (const [key, label] of Object.entries(caratMapping)) {
    const rates = data[key as keyof RawData] as CaratRates;
    transformed.UAE[label] = {
      yesterday: parseFloat(rates.yesterday.toString()),
      morning: parseFloat(rates.morning.toString()),
      afternoon: parseFloat(rates.afternoon.toString())
    };
  }

  // Transform country-specific rates
  const countries = ['SAU', 'QAT', 'KWT', 'BHR', 'OMN', 'IND'];

  for (const country of countries) {
    const countryData = data[country as keyof RawData] as { [key: string]: CaratRates };
    transformed[country] = {};

    for (const [caratKey, caratLabel] of Object.entries(caratMapping)) {
      if (countryData[caratKey]) {
        const rates = countryData[caratKey];

        // Skip if all values are 0 (like carat21 in most countries)
        const yesterday = parseFloat(rates.yesterday.toString());
        const morning = parseFloat(rates.morning.toString());
        const afternoon = parseFloat(rates.afternoon.toString());

        if (yesterday !== 0 || morning !== 0 || afternoon !== 0) {
          transformed[country][caratLabel] = {
            yesterday,
            morning,
            afternoon
          };
        }
      }
    }
  }

  // Add lastUpdated at the end
  transformed.lastUpdated = data.lastUpdated;

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
