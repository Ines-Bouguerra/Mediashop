from rest_framework import serializers
from products.models import Product


class products_Serializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('idProduct',
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
