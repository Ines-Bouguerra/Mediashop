from django.db import models
from account.models import Account


class Product(models.Model):
    category = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    domaine = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    reference = models.TextField()
    discount = models.CharField(max_length=255)
    url = models.URLField()
    timestamp = models.DateField(auto_now_add=True)
    brand = models.CharField(max_length=255)
    priceString = models.CharField(max_length=255)
    retailer = models.CharField(max_length=255)
    marketplace = models.CharField(max_length=255)
    price = models.FloatField()
    currency = models.CharField(max_length=3)
    sub_category = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    short_description = models.TextField(max_length=255)
    old_price = models.FloatField()
    image = models.URLField()
    marketplaceId = models.CharField(max_length=255)

    def __str__(self):
        return '%s' % self.name
