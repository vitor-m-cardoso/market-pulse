# imagem base do linux, recomendado pela astronomer
FROM quay.io/astronomer/astro-runtime:12.7.1

# Instalar dbt em um ambiente virtual
RUN python -m venv dbt_venv && \
    source dbt_venv/bin/activate && \
    pip install --no-cache-dir google-cloud-bigquery-storage && \
    pip install --no-cache-dir dbt-bigquery==1.5.3 && \
    deactivate

# Instalar pandas em um ambiente virtual
RUN python -m venv pandas_venv && \
    source pandas_venv/bin/activate && \
    pip install --no-cache-dir pandas && \
    # pip install --no-cache-dir openpyxl && \
    deactivate
