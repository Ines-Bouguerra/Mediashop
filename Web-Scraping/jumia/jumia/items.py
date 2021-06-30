import scrapy
from scrapy.item import Item, Field


class JumiaItem(scrapy.Item):

    name = Field()
    price = Field()
    oldPrice = Field()
    discount = Field()
   
