import { NextResponse } from 'next/server';
import { getTopProductsPerCategory } from '@/app/api/data/services/bigqueryService';

export async function GET() {
  try {
    const rows = await getTopProductsPerCategory();
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Erro ao buscar top produtos:', error);
    return new NextResponse('Erro ao buscar dados', { status: 500 });
  }
}
