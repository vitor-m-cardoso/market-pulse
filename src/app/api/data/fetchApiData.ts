export async function fetchBigQueryData() {
  try {
    const res = await fetch('https://market-pulse-one.vercel.app/api/bigquery', {
      next: { revalidate: 600 },
    });

    if (!res.ok) throw new Error('Erro ao buscar dados do BigQuery');

    return res.json();
  } catch (err) {
    console.error('Erro no fetchApiData:', err);
    return null;
  }
}
