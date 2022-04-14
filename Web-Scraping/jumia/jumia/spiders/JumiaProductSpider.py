import scrapy
from scrapy.selector import Selector
from jumia.items import JumiaItem


class JumiaproductspiderSpider(scrapy.Spider):
    name = 'JumiaProductSpider'
    allowed_domains = ['jumia.com.tn']
    start_urls = ['https://www.jumia.com.tn/pc-portables', 'https://www.jumia.com.tn/peripheriques-logiciels-accessoires/', 'https://www.jumia.com.tn/imprimantes-pc/', 'https://www.jumia.com.tn/telephones-smartphones/',
                  'https://www.jumia.com.tn/accessoires-mode-femme/', 'https://www.jumia.com.tn/accessoires-hommes-mode/', 'https://www.jumia.com.tn/stockage/', 'https://www.jumia.com.tn/accessoires-telephone/', 'https://www.jumia.com.tn/camera-video/', 'https://www.jumia.com.tn/electronique-accessoires-fournitures/', 'https://www.jumia.com.tn/connectiques/', 'https://www.jumia.com.tn/tvs/']
    DOWNLOAD_DELAY = 50000000    # 1000 ms of delay

    def parse(self, response):
        products = Selector(response).xpath(
            '//div[@class="info"]')

        for product in products:
            item = JumiaItem()
            item['title'] = product.xpath(
                'h3[@class="name"]/text()').extract_first()
            item['price'] = product.xpath(
                'div[@class="prc"]/text()').extract_first()
            item['oldPrice'] = product.xpath(
                'div[@class="s-prc-w"]/div[@class="old"]/text()').extract_first()
            item['promotion'] = product.xpath(
                'div[@class="s-prc-w"]/div[@class="tag _dsct _sm"]/text()').extract_first()
            item['rating'] = product.xpath(
                'div[@class="rev"]/div[@class="stars _s"]/text()').extract_first()

            yield item
        NEXT_PAGE_SELECTOR = 'a.pg ::attr(href)'
        if next_page := response.css(NEXT_PAGE_SELECTOR).extract_first():
            yield scrapy.Request(
                response.urljoin(next_page),
                callback=self.parse
            )
