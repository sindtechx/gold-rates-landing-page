import { NextResponse } from 'next/server';

const GOLD_RETAIL_HISTORICAL_API = 'https://dmu-api.gulfnews.com/v2/gn-feeds/data/gold-retail-historical.json';

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

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching historical gold rates:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
