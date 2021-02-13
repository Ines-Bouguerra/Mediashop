from rest_framework import serializers
from products.models import Product


class products_DSLSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id',
                  'name',
                  )
