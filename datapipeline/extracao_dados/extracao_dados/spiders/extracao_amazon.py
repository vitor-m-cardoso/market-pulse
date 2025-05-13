# import scrapy
# from datetime import datetime


# class NotebookSpider(scrapy.Spider):
#     name = "extracao_amazon"
#     allowed_domains = ["www.mercadolivre.com.br"]
#     start_urls = ["https://www.amazon.com.br/gp/movers-and-shakers"]

#     def parse(self, response):
            
#             produtos = response.css('li.a-carousel-card')
            
#             for produto in produtos:
#                 yield {
#                     'marketplace': 'Amazon',
#                     'categoria': produto.css('div.a-column.a-span8 h2.a-carousel-heading.a-inline-block::text').get().removeprefix("Produtos em alta em "),
#                     'titulo': produto.css('div.p13n-sc-truncate-desktop-type2::text').get(),
#                     'ranking_venda': produto.css('span.zg-bdg-text::text').re(r'\d+')[0],
#                     'preco': produto.css('span._cDEzb_p13n-sc-price_3mJ9Z::text').get(),
#                     # 'preco': float(
#                     #     produto.css('span._cDEzb_p13n-sc-price_3mJ9Z::text').get().replace('R$', '').replace('\xa0', '').replace('.', '').replace(',', '.').strip()
#                     # ) if produto.css('span._cDEzb_p13n-sc-price_3mJ9Z::text').get() else None,
#                     'link_produto': produto.urljoin(produto.css('a.a-link-normal::attr(href)').get()),
#                     'link_imagem_produto': produto.css('img::attr(src)').get(),
#                     'data_extracao': datetime.now()
#                 }

import scrapy

class AmazonSpider(scrapy.Spider):
    name = "extracao_amazon"
    start_urls = ["https://www.amazon.com.br/gp/movers-and-shakers"]

    def start_requests(self):
        for url in self.start_urls:
            yield scrapy.Request(
                url,
                meta={"playwright": True},
                callback=self.parse
            )

    def parse(self, response):
        precos = response.css('span._cDEzb_p13n-sc-price_3mJ9Z::text').getall()
        for preco in precos:
            yield {"preco": preco}
