import scrapy


class MytekspiderSpider(scrapy.Spider):
    name = 'mytekSpider'
    allowed_domains = ['mytek.tn']
    start_urls = ['https://www.mytek.tn']
    def parse(self, response):
        for div_sel in response.css('ul#menu li.li-niveau1'):
            if url_cat := div_sel.css('a::attr(href)').extract_first():
                yield scrapy.Request(url_cat,self.parse_categorie)
    def parse_categorie(self, response):
        # xp = "//div[@class='product-container']//li/a/@href"
        # return (Request(url, callback=self.parse_manga_list_page) for url in response.xpath(xp).extract())
    # def parse_manga_list_page(self, response):
        for div_sel in response.css('ul.product_list div.product-container'):
            divoldprice=''
            url=''
            title=''
            price=''
            image=''
            desc=''
            if div_sel.css('span.old-price::text'):
                divoldprice = div_sel.css('span.old-price::text').extract_first().strip()
            if div_sel.css('a.product-name::attr(href)'):
                url = div_sel.css('a.product-name::attr(href)').extract_first().strip()
            if div_sel.css('a.product-name::text'):
                title = div_sel.css('a.product-name::text').extract_first().strip()
            if div_sel.css('span.price::text'):
                price = div_sel.css('span.price::text').extract_first().strip()
            if div_sel.css('div.product-image-container img::attr(src)'):
                image = div_sel.css('div.product-image-container img::attr(src)').extract_first().strip()
            if div_sel.css('p.product-desc'):
                desc = div_sel.css('p.product-desc').extract_first().strip()
            yield {
                "url" : url,
                "title":  title,
                "price":  price,
                "image":  image,
                "desc":  desc,
                "old-price":  divoldprice,				
            }
        if response.css('ul.pagination li.pagination_next a::attr(href)'):
            next_page = response.css('ul.pagination li.pagination_next a::attr(href)').extract_first().strip()
        if next_page:
            next_page_url = f'https://www.mytek.tn{next_page}'
            yield scrapy.Request(next_page_url,self.parse_categorie)
