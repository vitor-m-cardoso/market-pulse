export async function fetchTopProductsPerCategory() {
  try {
    const isServer = typeof window === 'undefined';

    const url = isServer
      ? `${process.env.NEXT_PUBLIC_BASE_URL || 'https://market-pulse-one.vercel.app'}/api/top-products`
      : '/api/top-products';

    const res = await fetch(url, {
      next: { revalidate: 600 },
    });
  
    if (!res.ok) throw new Error('Erro ao buscar top produtos por categoria');

    return res.json();
  } catch (err) {
    console.error('Erro no fetchTopProductsPerCategory:', err);
    return null;
  }
}
