export async function fetchCategoryStats() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category-stats`, {
      next: { revalidate: 600 },
    });

    if (!res.ok) throw new Error('Erro ao buscar estatísticas por categoria');

    return res.json();
  } catch (err) {
    console.error('Erro no fetchCategoryStats:', err);
    return null;
  }
}
