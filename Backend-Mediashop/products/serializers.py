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
                  'image',
                  )
        verbose_name_plural = 'Products'
        ordering = ('timestamp', 'price')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('pk', 'email', 'first_name', 'last_name',)


class WishlistSerializer(serializers.ModelSerializer):
    product = products_Serializer(required=False, read_only=True)
    user = UserSerializer(required=False, read_only=True)

    class Meta:
        model = WishlistItem
        fields = ('id', 'product', 'user', 'created_at',)
