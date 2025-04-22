from airflow.decorators import dag, task
from datetime import datetime, timezone
import os
import pandas as pd
import json


from airflow.providers.google.cloud.transfers.local_to_gcs import LocalFilesystemToGCSOperator
from airflow.providers.google.cloud.operators.bigquery import BigQueryCreateEmptyDatasetOperator
from airflow.models.baseoperator import chain

from astro import sql as aql
from astro.files import File
from astro.sql.table import Table, Metadata
from astro.constants import FileType


@dag(
    dag_id="dag_marketpulse_v3",
    start_date=datetime(2025, 4, 4),
    schedule=None,
    catchup=False,
    tags=['retail']
)
def dag_marketpulse():
    bucket_name = 'marketpulse_online_retail'

    @task.external_python(python='/usr/local/airflow/pandas_venv/bin/python')
    def leitura_e_tratamento_dados_csv():
        import pandas as pd
        import json
        from datetime import datetime, timezone

        atributos_categoria = {
            'eletrodomesticos': ['marca', 'modelo', 'cor', 'voltagem', 'capacidade', 'consumo_energia', 'tipo'],
            'eletronicos': ['marca', 'modelo', 'armazenamento_interno', 'memoria_ram', 'sistema_operacional', 'tamanho_tela', 'bateria_inclusa', 'tipo_conector'],
            'livros': ['titulo', 'autor', 'editora', 'ano_publicacao', 'idioma', 'numero_paginas', 'isbn', 'genero'],
            'moveis': ['marca', 'modelo', 'material_principal', 'cor', 'dimensoes', 'peso_produto', 'tem_rodinhas'],
            'cama e banho': ['nome', 'marca', 'cor', 'tamanho', 'quantidade_pecas', 'gramatura', 'quantidade_fios', 'hipoalergenico'],
        }

        def gerar_atributos(row):
            categoria = str(row.get("categoria", "")).strip().lower()
            campos = atributos_categoria.get(categoria, [])
            atributos = {campo: row[campo] for campo in campos if campo in row and pd.notnull(row[campo])}
            return json.dumps(atributos, ensure_ascii=False)

        data = pd.read_csv('include/datasets/dados_ecommerce.csv', header=0, encoding='utf-8')
        data.dropna(axis=1, how='all', inplace=True)
        data.dropna(axis=0, how='all', inplace=True)
        data.dropna(subset='nome', inplace=True)
        data.reset_index(inplace=True, drop=True)
        data['atributos'] = data.apply(gerar_atributos, axis=1)

        colunas_finais = ['nome', 'categoria', 'marca', 'atributos']
        if 'preco' in data.columns:
            colunas_finais.insert(2, 'preco')  # insere preco após categoria

        data = data[colunas_finais]
        data.insert(0, 'id', data.index + 1)
        data['created_at'] = datetime.now(timezone.utc).isoformat()

        data.to_csv('include/datasets/dados_tratados_ecommerce.csv', index=False)

    upload_csv_para_o_gcp = LocalFilesystemToGCSOperator(
        task_id='upload_csv_para_o_gcp',
        src=os.path.join('include', 'datasets', 'dados_tratados_ecommerce.csv'),
        dst='raw/dados_ecommerce.csv',
        bucket=bucket_name,
        gcp_conn_id='gcp',
        mime_type='text/csv'
    )

    cria_dataset_gcp = BigQueryCreateEmptyDatasetOperator(
        task_id='cria_dataset_gcp',
        dataset_id='dataset_marketpulse',
        gcp_conn_id='gcp'
    )

    dataset_gcs_para_raw = aql.load_file(
        task_id='dataset_gcs_para_raw',
        input_file=File(
            f'gs://{bucket_name}/raw/dados_ecommerce.csv',
            conn_id='gcp',
            filetype=FileType.CSV
        ),
        output_table=Table(
            name='produtos_v3',
            conn_id='gcp',
            metadata=Metadata(schema='dataset_marketpulse'),
        ),
        use_native_support=True,
        native_support_kwargs={"encoding": "utf-8"}
    )

    chain(
        leitura_e_tratamento_dados_csv(),
        upload_csv_para_o_gcp,
        cria_dataset_gcp,
        dataset_gcs_para_raw,
    )

dag_instance = dag_marketpulse()
