from rest_framework import serializers
from products.models import *


class products_Serializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id',
                  'category',
                  'description',
                  'domaine',
                  'name',
                  'reference',
                  'discount',
                  'url',
                  'timestamp',
                  'brand',
                  'priceString',
                  'retailer',
                  'marketplace',
                  'price',
                  'currency',
                  'sub_category',
                  'country',
                  'short_description',
                  'old_price',
                  'image',
                  'marketplaceId',
                  )
        verbose_name_plural = 'Products'
        ordering = ('timestamp', 'price')

        model = Favorite
        fields = ('favorite_created_by', 'post_text', 'created_at')
        verbose_name_plural = 'Favorites'

        model = Rating
        fields = ('rating_created_by', 'created_at')
        verbose_name_plural = 'Ratings'

        model = Post
        fields = ('post_text', 'created_at', 'post_created_by')
        verbose_name_plural = 'Posts'
