import { NextResponse } from 'next/server';

const GOLD_RETAIL_HISTORICAL_API = 'https://dmu-api.gulfnews.com/v2/gn-feeds/data/gold-retail-historical.json';

interface HistoricalEntry {
  date?: string;
  [key: string]: any;
}

function transformHistoricalRates(data: any): any[] {
  const transformed: any[] = [];

  // Handle both array and object structures from source
  const entries = Array.isArray(data) ? data : Object.values(data);

  const caratMapping: { [key: string]: string } = {
    carat24: '24K',
    carat22: '22K',
    carat21: '21K',
    carat18: '18K'
  };

  for (const entry of entries) {
    if (!entry || typeof entry !== 'object') continue;

    const transformedEntry: any = {};

    // Transform carat values
    for (const [oldKey, newKey] of Object.entries(caratMapping)) {
      if (entry[oldKey] !== undefined && entry[oldKey] !== null) {
        const value = parseFloat(entry[oldKey].toString());
        if (!isNaN(value)) {
          transformedEntry[newKey] = value;
        }
      }
    }

    // Add date field
    transformedEntry.date = entry.date || entry.Date || '';

    // Only add if we have at least one carat value
    if (Object.keys(transformedEntry).length > 1) {
      transformed.push(transformedEntry);
    }
  }

  return transformed;
}

export async function GET() {
  try {
    const response = await fetch(GOLD_RETAIL_HISTORICAL_API, {
      next: { revalidate: 3600 } // Cache for 1 hour (historical data changes less frequently)
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch historical gold rates' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const transformed = transformHistoricalRates(data);

    return NextResponse.json(transformed);
  } catch (error) {
    console.error('Error fetching historical gold rates:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
