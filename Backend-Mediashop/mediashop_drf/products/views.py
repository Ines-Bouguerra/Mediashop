from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from products.models import Product
from products.serializers import products_Serializer
from rest_framework.decorators import api_view
# Create your views here.


@api_view(['GET', 'POST', 'DELETE'])
def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        name = request.GET.get('name', None)
        if name is not None:
            products = products.filter(title__icontains=name)
        products_Serializer = products_Serializer(products, many=True)
        return JsonResponse(products_Serializer.data, safe=False)
