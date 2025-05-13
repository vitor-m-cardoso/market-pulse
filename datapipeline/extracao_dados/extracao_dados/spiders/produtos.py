import scrapy

class ProdutosSpider(scrapy.Spider):
    name = "produtos"
    start_urls = ['https://www.mercadolivre.com.br']

    def parse(self, response):
        # Para cada carrossel (bloco de categoria)
        carrosseis = response.css('div.dynamic-carousel__container--with-link')

        for carrossel in carrosseis:
            # Pegando a categoria daquele carrossel
            categoria = carrossel.css('h2::text').get()

            # Pulando se for categoria "Games"
            if categoria and categoria.strip() == "Games":
                continue

            # Pegando os produtos dentro do carrossel
            produtos = carrossel.css('li')

            for produto in produtos:
                titulo = produto.css('a::attr(title)').get()
                preco = produto.css('.price-tag::text').get()
                link = produto.css('a::attr(href)').get()

                # Garantir que temos um título e um link válidos
                if titulo and link:
                    # Verifica se preço é encontrado, se não, define como "Preço não disponível"
                    if not preco:
                        preco = "Preço não disponível"
                    
                    yield {
                        'categoria': categoria,
                        'titulo': titulo.strip() if titulo else 'Título não disponível',
                        'preco': preco.strip() if preco else 'Preço não disponível',
                        'link': link
                    }
