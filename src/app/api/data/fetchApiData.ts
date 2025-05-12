export async function fetchBigQueryData() {
  try {
    const res = await fetch('/api/bigquery', {
      next: { revalidate: 600 },
    });

    if (!res.ok) throw new Error('Erro ao buscar dados do BigQuery');

    return res.json();
  } catch (err) {
    console.error('Erro no fetchBigQueryData:', err);
    return null;
  }
}
