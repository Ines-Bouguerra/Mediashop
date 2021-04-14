import scrapy
from scrapy.item import Item, Field


class TunisianetItem(scrapy.Item):
    reference = Field()
    title = Field()
    price = Field()
    brand = Field()
