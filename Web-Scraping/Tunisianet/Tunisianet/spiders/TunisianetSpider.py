import scrapy
from scrapy.selector import Selector
from Tunisianet.items import TunisianetItem


class TunisianetspiderSpider(scrapy.Spider):
    name = 'TunisianetSpider'
    allowed_domains = ['tunisianet.com.tn']
    start_urls = ['https://www.tunisianet.com.tn/702-ordinateur-portable', 'https://www.tunisianet.com.tn/700-accessoires-et-peripheriques', 'https://www.tunisianet.com.tn/701-ordinateur-de-bureau', 'https://www.tunisianet.com.tn/377-telephone-portable-tunisie', 'https://www.tunisianet.com.tn/716-swatch',
                  'https://www.tunisianet.com.tn/385-logiciels-informatique-tunisie', 'https://www.tunisianet.com.tn/375-serveur-informatique-tunisie', 'https://www.tunisianet.com.tn/380-onduleur', 'https://www.tunisianet.com.tn/406-composant-informatique', ]

    def parse(self, response):
        products = Selector(response).xpath(
            '//div[@class="wb-product-desc product-description col-lg-7 col-xl-7 col-md-6 col-sm-6 col-xs-6"]')
        """logoPrices = Selector(response).xpath(
            '//div[@class="wb-product-desc product-description col-lg-7 col-xl-7 col-md-6 col-sm-6 col-xs-6"]')"""

        for product in products:
            item = TunisianetItem()
            item['reference'] = product.xpath(
                'span/text()').extract()[0]
            item['title'] = product.xpath(
                'h2/a/text()').extract()[0]

            for logoPrice in products:
                if logoPrice == product:
                    item['price'] = logoPrice.xpath(
                        'div[@class="product-price-and-shipping"]/span[@class="price"]/text()').extract()[0]
                    item['brand'] = logoPrice.xpath(
                        'div[@class="product-manufacturer"]/a/@href').extract()[0]

            yield item
        NEXT_PAGE_SELECTOR = 'a.next ::attr(href)'
        if next_page := response.css(NEXT_PAGE_SELECTOR).extract_first():
            yield scrapy.Request(
                response.urljoin(next_page),
                callback=self.parse
            )
