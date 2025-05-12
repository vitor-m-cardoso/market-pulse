export async function fetchCategoryStats() {
  try {
    const isServer = typeof window === 'undefined';

    const url = isServer
      ? `${process.env.NEXT_PUBLIC_BASE_URL || 'https://market-pulse-one.vercel.app'}/api/category-stats`
      : '/api/category-stats';

    const res = await fetch(url, {
      next: { revalidate: 600 },
    });

    if (!res.ok) throw new Error('Erro ao buscar estatísticas por categoria');

    return res.json();
  } catch (err) {
    console.error('Erro no fetchCategoryStats:', err);
    return null;
  }
}
