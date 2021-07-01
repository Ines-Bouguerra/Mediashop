from django.db import models
from category.models import Category
from brand.models import Brand
from account.models import Account


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="category", null=True, blank=True)
    description = models.TextField(max_length=500)
    domaine = models.CharField(max_length=255, null=True, blank=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    reference = models.TextField(null=True, blank=True)
    discount = models.CharField(max_length=255, null=True, blank=True)
    url = models.URLField(null=True, blank=True)
    timestamp = models.DateField(auto_now_add=True)
    brand= models.ForeignKey(
        Brand, on_delete=models.CASCADE, related_name="brand", null=True, blank=True)
    priceString = models.CharField(max_length=255, null=True, blank=True)
    retailer = models.CharField(max_length=255, null=True, blank=True)
    marketplace = models.CharField(max_length=255, null=True, blank=True)
    price = models.CharField(max_length=255, null=True, blank=True)
    currency = models.CharField(max_length=3)
    sub_category = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    image = models.URLField()
    category_slug = models.CharField(max_length=255, null=True, blank=True)
    brand_slug = models.CharField(max_length=255, null=True, blank=True)

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
