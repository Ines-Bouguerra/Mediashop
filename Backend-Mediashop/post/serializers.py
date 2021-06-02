from rest_framework import serializers

from account.models import Account
from products.models import Product
from post.models import  Post


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('pk', 'email', 'first_name', 'last_name',)
        


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('pk', 'name','reference', 'priceString','image','url',)


class PostSerializer(serializers.ModelSerializer):
    product = ProductSerializer(required=False, read_only=True)
    user = UserSerializer(required=False, read_only=True)
    # serializers.ImageField(use_url=True, required=False, allow_null=True)

    class Meta:
        model = Post
        fields = ('id','subject','comment','rate','product','user')