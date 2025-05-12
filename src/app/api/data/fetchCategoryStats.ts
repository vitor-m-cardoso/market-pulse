import { baseUrl } from "@/app/utils/baseUrl";

export async function fetchCategoryStats() {
  try {
    const res = await fetch(`${process.env.NODE_ENV === 'development' ? baseUrl : ''}/api/category-stats`, {
      next: { revalidate: 600 },
    });

    if (!res.ok) throw new Error('Erro ao buscar estatísticas por categoria');

    return res.json();
  } catch (err) {
    console.error('Erro no fetchCategoryStats:', err);
    return null;
  }
}
