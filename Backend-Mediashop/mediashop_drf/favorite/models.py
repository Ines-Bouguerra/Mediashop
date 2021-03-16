from django.db import models
from account.models import Account
from products.models import Product


class Favorite(models.Model):
    product_favorites = models.ManyToManyField(Product)
    favorite_created_by = models.ForeignKey(
        Account, on_delete=models.CASCADE, related_name="user_creator_favorite")
    author = models.CharField(max_length=255, default='admin')
    created_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Favorites'
