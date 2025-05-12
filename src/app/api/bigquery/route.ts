import { NextResponse } from 'next/server';
import { getSampleData } from '@/app/api/data/services/bigqueryService';

export async function GET() {
  try {
    const rows = await getSampleData();
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Erro ao consultar o BigQuery:', error);
    return new NextResponse('Erro ao buscar dados', { status: 500 });
  }
}
