from django.db import models

# Create your models here.


class Product(models.Model):
    category = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    domaine = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    reference = models.CharField(max_length=255)
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
    short_description = models.TextField(max_length=255, unique=True)
    old_price = models.FloatField()
    image = models.URLField()
    marketplaceId = models.CharField(max_length=255)
