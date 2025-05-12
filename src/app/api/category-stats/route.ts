import { NextResponse } from 'next/server';
import { getCategoryStats } from '@/app/api/data/services/bigqueryService';

export async function GET() {
  try {
    const rows = await getCategoryStats();
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Erro ao consultar estatísticas por categoria:', error);
    return new NextResponse('Erro ao buscar dados', { status: 500 });
  }
}
