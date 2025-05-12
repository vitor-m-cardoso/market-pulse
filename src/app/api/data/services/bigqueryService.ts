import { getGCPCredentials } from '@/app/utils/getGcpCredentials';
import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery(getGCPCredentials());

export async function getSampleData() {
  const query = `
    SELECT * FROM \`aesthetic-guild-454613-i0.dataset_marketpulse.dados_ecommerce\`
    LIMIT 1000
  `;
  const [rows] = await bigquery.query({ query });
  return rows;
}

export async function getCategoryStats() {
  const query = `
    SELECT
      categoria as categoria,
      ROUND(MIN(preco), 2) AS minimo,
      ROUND(MAX(preco), 2) AS maximo,
      APPROX_QUANTILES(preco, 2)[OFFSET(1)] AS mediana,
      ROUND(AVG(preco), 2) AS media,
      SUM(preco) AS volumeFinanceiro
    FROM \`aesthetic-guild-454613-i0.dataset_marketpulse.dados_ecommerce\`
    GROUP BY categoria
    ORDER BY 2, 3, 4, 5 DESC
    LIMIT 1000
  `;
  const [rows] = await bigquery.query({ query });
  return rows;
}

export async function getTopProductsPerCategory() {
  const query = `
    WITH base AS (
      SELECT
        categoria,
        titulo,
        LOWER(REGEXP_REPLACE(titulo, r'[^a-zA-Z0-9]', '')) AS titulo_normalizado,
        ranking_venda
      FROM \`aesthetic-guild-454613-i0.dataset_marketpulse.dados_ecommerce\`
      WHERE ranking_venda IS NOT NULL
    ),

    deduplicado AS (
      SELECT
        categoria,
        titulo_normalizado,
        MIN(ranking_venda) AS melhor_ranking,
        ANY_VALUE(titulo) AS titulo_exemplo
      FROM base
      GROUP BY categoria, titulo_normalizado
    ),

    com_ranking_real AS (
      SELECT
        categoria,
        titulo_exemplo AS titulo,
        melhor_ranking,
        ROW_NUMBER() OVER (
          PARTITION BY categoria
          ORDER BY melhor_ranking ASC
        ) AS ranking_real
      FROM deduplicado
    )

    SELECT
      categoria,
      titulo,
      melhor_ranking AS ranking_venda,
      ranking_real
    FROM com_ranking_real
    WHERE ranking_real <= 5
    ORDER BY categoria, ranking_real;
  `;
  const [rows] = await bigquery.query({ query });
  return rows;
}
