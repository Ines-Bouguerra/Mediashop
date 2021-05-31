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

      