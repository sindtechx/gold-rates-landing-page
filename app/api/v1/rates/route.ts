import { NextResponse } from 'next/server';

const GOLD_RETAIL_API = 'https://dmu-api.gulfnews.com/v2/gn-feeds/data/gold-retail.json';

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

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching gold rates:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
