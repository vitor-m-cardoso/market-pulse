export async function fetchBigQueryData() {
  try {
    const isServer = typeof window === 'undefined';

    const url = isServer
      ? `${process.env.NEXT_PUBLIC_BASE_URL || 'https://market-pulse-one.vercel.app'}/api/bigquery`
      : '/api/bigquery';

    const res = await fetch(url, {
      next: { revalidate: 600 },
    });

    if (!res.ok) throw new Error('Erro ao buscar dados do BigQuery');

    return res.json();
  } catch (err) {
    console.error('Erro no fetchApiData:', err);
    return null;
  }
}
