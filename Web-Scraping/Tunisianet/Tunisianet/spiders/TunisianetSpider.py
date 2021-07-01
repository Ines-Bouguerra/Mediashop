import scrapy
from scrapy.selector import Selector
from Tunisianet.items import TunisianetItem
from datetime import datetime


class TunisianetspiderSpider(scrapy.Spider):
    name = 'TunisianetSpider'
    allowed_domains = ['tunisianet.com.tn']
    start_urls = ['https://www.tunisianet.com.tn/702-ordinateur-portable',
                  'https://www.tunisianet.com.tn/700-accessoires-et-peripheriques', 'https://www.tunisianet.com.tn/701-ordinateur-de-bureau', 'https://www.tunisianet.com.tn/377-telephone-portable-tunisie', 'https://www.tunisianet.com.tn/716-swatch',
                  'https://www.tunisianet.com.tn/385-logiciels-informatique-tunisie', 'https://www.tunisianet.com.tn/375-serveur-informatique-tunisie',
                  'https://www.tunisianet.com.tn/380-onduleur', 'https://www.tunisianet.com.tn/406-composant-informatique',
                  ]

    def parse(self, response):
        products = Selector(response).xpath(
            '//div[@class="thumbnail-container text-xs-center"]')
        """logoPrices = Selector(response).xpath(
            '//div[@class="wb-product-desc product-description col-lg-7 col-xl-7 col-md-6 col-sm-6 col-xs-6"]')"""

        for product in products:
            item = TunisianetItem()
            item['url'] = product.xpath(
                'div[@class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6"]/a[@class="thumbnail product-thumbnail first-img"]/@href').extract()[0]
            item['image'] = product.xpath(
                'div[@class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6"]/a[@class="thumbnail product-thumbnail first-img"]/img[@class="center-block img-responsive"]/@src').extract()[0]
            item['reference'] = product.xpath(
                'div[@class="wb-product-desc product-description col-lg-7 col-xl-7 col-md-6 col-sm-6 col-xs-6"]/span/text()').extract()
            reference_slice = slice(1, -1, 1)
            item['reference'] = item['reference'][0][reference_slice]
            item['name'] = product.xpath(
                'div[@class="wb-product-desc product-description col-lg-7 col-xl-7 col-md-6 col-sm-6 col-xs-6"]/h2/a/text()').extract()[0]

            for logoPrice in products:
                if logoPrice == product:
                    item['priceString'] = logoPrice.xpath(
                        'div[@class="wb-product-desc product-description col-lg-7 col-xl-7 col-md-6 col-sm-6 col-xs-6"]/div[@class="product-price-and-shipping"]/span[@class="price"]/text()').extract()[0]
                    price_slice = slice(0, -3)
                    item['price'] = item['priceString'][price_slice]
                    item['brand'] = logoPrice.xpath(
                        'div[@class="wb-product-desc product-description col-lg-7 col-xl-7 col-md-6 col-sm-6 col-xs-6"]/div[@class="product-manufacturer"]/a/@href').extract()
                    brand_slice = slice(30, 40)
                    item['brand'] = item['brand'][0][brand_slice]
            item['category'] = product.xpath(
                '//div[@class="block-category-header col-xs-12"]/div[@class="text-sm-center hidden-md-up"]/h1[@class="h1 bh"]/text()').extract()[0]
            item['subcategory'] = product.xpath(
                '//div[@class="block-category-header col-xs-12"]/div[@class="text-sm-center hidden-md-up"]/h1[@class="h1 bh"]/text()').extract()[0]
            item['timestamp'] = datetime.now()
            item['currency'] = 'TND'
            item['country'] = 'TN'
            item['domaine'] = product.xpath(
                '//div[@class="col-lg-3 col-md-3 col-sm-3 hidden-sm-down"]/a/@href').extract()
            domain_slice = slice(12, 29, 1)
            item['domaine'] = item['domaine'][0][domain_slice]
            item['retailer'] = item['domaine'][0][domain_slice]
            item['marketplace'] = item['domaine'][0][domain_slice]+' TN'
            item['description'] = product.xpath(
                '//div[@class="thumbnail-container text-xs-center"]/div[@class="wb-product-desc product-description col-lg-7 col-xl-7 col-md-6 col-sm-6 col-xs-6"]/div[@class="listds"]/a/p/text()').extract()[0]
            yield item
        NEXT_PAGE_SELECTOR = 'a.next ::attr(href)'
        next_page = response.css(NEXT_PAGE_SELECTOR).extract_first()
        if next_page:
            yield scrapy.Request(
                response.urljoin(next_page),
                callback=self.parse
            )
