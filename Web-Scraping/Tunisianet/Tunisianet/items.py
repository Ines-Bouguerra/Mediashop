import scrapy
from scrapy.item import Item, Field


class TunisianetItem(scrapy.Item):

    url = Field()
    image = Field()
    reference = Field()
    name = Field()
    priceString = Field()
    price = Field()
    subcategory = Field()
    timestamp = Field()
    currency = Field()
    country = Field()
    domaine = Field()
    description = Field()
    discount= Field()
    retailer= Field()
    marketplace= Field()
    category= Field()
    brand= Field()
