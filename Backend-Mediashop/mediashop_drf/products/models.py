from django.db import models
from account.models import Account
from category.models import Category


class Product(models.Model):
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="category")
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
    users_wishlist = models.ManyToManyField(Account, related_name="user_wishlist", blank=True)
    def __str__(self):
        return self.name
