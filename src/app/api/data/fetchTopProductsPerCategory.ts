export async function fetchTopProductsPerCategory() {
  try {
    const res = await fetch('https://market-pulse-one.vercel.app/api/top-products', {
      next: { revalidate: 600 },
    });
    console.log("resssssssss:", res)
    if (!res.ok) throw new Error('Erro ao buscar top produtos por categoria');

    return res.json();
  } catch (err) {
    console.error('Erro no fetchTopProductsPerCategory:', err);
    return null;
  }
}
