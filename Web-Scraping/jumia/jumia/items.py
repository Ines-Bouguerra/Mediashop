import scrapy
from scrapy.item import Item, Field


class JumiaItem(scrapy.Item):

    title = Field()
    price = Field()
    oldPrice = Field()
    promotion = Field()
    rating = Field()
