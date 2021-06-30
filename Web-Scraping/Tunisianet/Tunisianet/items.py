import scrapy
from scrapy.item import Item, Field


class TunisianetItem(scrapy.Item):

    url = Field()
    image = Field()
    reference = Field()
    name = Field()
    priceString = Field()
    price = Field()
    brand = Field()
    category = Field()
    subcategory = Field()
    timestamp = Field()
    currency = Field()
    country = Field()
    domaine = Field()
    description = Field()

class TunisianetCategoryItem(scrapy.Item):
    
    category = Field()