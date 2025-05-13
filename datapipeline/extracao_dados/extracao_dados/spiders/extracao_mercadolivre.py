import scrapy
from datetime import datetime


class NotebookSpider(scrapy.Spider):
    name = "extracao_mercadolivre"
    allowed_domains = ["www.mercadolivre.com.br"]
    start_urls = ["https://www.mercadolivre.com.br/mais-vendidos"]

    def parse(self, response):
        data_extracao = datetime.now()
        carrosseis = response.css('div.CarouselDynamic')

        for carrossel in carrosseis:
            # Extracao da categoria 1x por carrossel
            categoria = carrossel.css('h2.andes-typography--type-title::text').get()
            string_sem_aspas = categoria.strip('"')
            print(string_sem_aspas)
            
            produtos = carrossel.css('div.dynamic-carousel__item-container')

            for produto in produtos:
                yield {
                    'marketplace': 'Mercado Livre',
                    'categoria': string_sem_aspas,
                    'titulo': produto.css('h3.dynamic-carousel__title::text').get(),
                    'ranking_venda': produto.css('span.dynamic-carousel__pill-container--text.dynamic-carousel__pill-container--text-best-seller::text').re(r'(\d+)')[0] if produto.css('span.dynamic-carousel__pill-container--text.dynamic-carousel__pill-container--text-best-seller::text') else None, 
                    # 'preco': produto.css('div.dynamic-carousel__price-block span.dynamic-carousel__price span::text').re(r'(\d+)')[0] if produto.css('div.dynamic-carousel__price-block span.dynamic-carousel__price span::text') else None, 
                    'preco': f"{produto.css('div.dynamic-carousel__price-block span.dynamic-carousel__price span::text').re(r'(\d+)')[0]},{produto.css('sup.dynamic-carousel__price-decimals::text').get()}"
                            if produto.css('div.dynamic-carousel__price-block span.dynamic-carousel__price span::text') and produto.css('sup.dynamic-carousel__price-decimals::text') else
                            produto.css('div.dynamic-carousel__price-block span.dynamic-carousel__price span::text').re(r'(\d+)')[0] if produto.css('div.dynamic-carousel__price-block span.dynamic-carousel__price span::text') else None,
                    'link_produto': produto.css('a.splinter-link::attr(href)').get(),
                    'link_imagem_produto': produto.css('img.dynamic-carousel__img::attr(data-src)').get(),
                    'data_extracao': data_extracao
                }
            pass


# <sup class="dynamic-carousel__price-decimals">90</sup> 