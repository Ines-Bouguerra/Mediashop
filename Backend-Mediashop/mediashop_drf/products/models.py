from django.db import models

# Create your models here.


class Product(models.Model):
    category = models.CharField(max_length=255, blank=False)
    description = models.TextField(max_length=255)
    domaine = models.CharField(max_length=255)
    name = models.CharField(max_length=255, blank=False)
    reference = models.CharField(max_length=255, blank=False)
    discount = models.CharField(max_length=255)
    url = models.URLField(blank=False)
    timestamp = models.DateField(auto_now_add=True)
    brand = models.CharField(max_length=255, blank=False)
    priceString = models.CharField(max_length=255)
    retailer = models.CharField(max_length=255)
    marketplace = models.CharField(max_length=255)
    price = models.FloatField(blank=False)
    currency = models.CharField(max_length=3)
    sub_category = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    short_description = models.TextField(max_length=255, unique=True)
    old_price = models.FloatField()
    image = models.URLField( blank=False)
    marketplaceId = models.CharField(max_length=255, blank=False)
