from django.db import models
from category.models import Category
from brand.models import Brand
from account.models import Account


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="category")
    description = models.TextField(max_length=255)
    domaine = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    reference = models.TextField()
    discount = models.CharField(max_length=255)
    url = models.URLField()
    timestamp = models.DateField(auto_now_add=True)
    brand = models.ForeignKey(
        Brand, on_delete=models.CASCADE, related_name="brand")
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
        return self.name


class WishlistItem(models.Model):
    session_id = models.CharField(null=True, max_length=32)
    product = models.ForeignKey(
        Product, null=True, on_delete=models.SET_NULL)
    user = models.ForeignKey(
        Account, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.session_id
