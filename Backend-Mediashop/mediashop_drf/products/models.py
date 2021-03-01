from django.db import models
from django.contrib.auth.models import User
from account.models import Account
# Create your models here.


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


class Favorite(models.Model):
    product_favorites = models.ManyToManyField(Product)
    favorite_created_by = models.ForeignKey(
        Account, on_delete=models.CASCADE, related_name="user_creator_favorite")
    author = models.CharField(max_length=255, default='admin')
    created_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Favorites'


class Post(models.Model):
    post_created_by = models.ForeignKey(
        Account, on_delete=models.CASCADE, related_name="user_creator_post")
    post_text = models.CharField(max_length=255, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Posts'

    def __str__(self):
        return '%s' % self.post_text


class Rating(models.Model):
    rating_created_by = models.ForeignKey(
        Account, on_delete=models.CASCADE, related_name="user_creator_rating")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Ratings'
