# pip install --upgrade google-cloud-bigquery
# pip install pandas-gbq
# pip install tabulate

import pandas as pd
from pandas_gbq import read_gbq

from google.cloud import bigquery
from google.oauth2 import service_account
from google.oauth2.service_account import Credentials


query = '''
        SELECT *
        FROM `aesthetic-guild-454613-i0.dataset_marketpulse.raw_dados_ecommerce`
        LIMIT 250
'''

credenciais = service_account.Credentials.from_service_account_file(filename='C:/Users/Usuario/Desktop/datapipeline/include/gcp/gcp_service_account.json',
                                                                    scopes=["https://www.googleapis.com/auth/cloud-platform"])
data = pd.read_gbq(credentials=credenciais, query=query)
colunasprincipais = data[['autor', 'editora', 'ano_publicacao', 'genero', 'numero_paginas', 'genero']]


print(colunasprincipais.head(10).to_markdown(tablefmt="pipe"))