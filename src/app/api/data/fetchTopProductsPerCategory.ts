import { baseUrl } from "@/app/utils/baseUrl";

export async function fetchTopProductsPerCategory() {
  try {
    const res = await fetch(`${baseUrl}/api/top-products`, {
      next: { revalidate: 600 },
    });

    if (!res.ok) throw new Error('Erro ao buscar top produtos por categoria');

    return res.json();
  } catch (err) {
    console.error('Erro no fetchTopProductsPerCategory:', err);
    return null;
  }
}
