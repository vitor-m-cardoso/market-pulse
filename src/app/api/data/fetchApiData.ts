import { baseUrl } from "@/app/utils/baseUrl";

export async function fetchBigQueryData() {
  try {
    const res = await fetch(`${process.env.NODE_ENV === 'development' ? baseUrl : ''}/api/bigquery`, {
      next: { revalidate: 600 },
    });

    if (!res.ok) throw new Error('Erro ao buscar dados do BigQuery');

    return res.json();
  } catch (err) {
    console.error('Erro no fetchBigQueryData:', err);
    return null;
  }
}
