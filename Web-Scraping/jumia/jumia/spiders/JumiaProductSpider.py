import scrapy


class JumiaproductspiderSpider(scrapy.Spider):
    name = 'JumiaProductSpider'
    allowed_domains = ['jumia.com.tn']
    start_urls = ['http://jumia.com.tn/']

    def parse(self, response):
        pass
