export type ProductDataType = {
  marketplace: string;
  categoria: string;
  titulo: string;
  ranking_venda: number;
  preco: number;
  link_produto: string;
  link_imagem_produto: string;
  data_extracao: { value: string | Date };
  criado_em: { value: string | Date };
}