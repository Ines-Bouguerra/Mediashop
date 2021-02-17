from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from products.models import Product
from products.serializers import products_Serializer
from rest_framework.decorators import api_view
from products.documents import ProductDocument
from django.http import HttpResponse
# Create your views here.


@api_view(['GET', 'POST', 'DELETE'])
def product_list(request):
    # GET list of tutorials, POST a new tutorial, DELETE all tutorials
    if request.method == 'GET':
        products = Product.objects.all()

        name = request.GET.get('name', None)
        if name is not None:
            products = products.filter(title__icontains=name)

        products__Serializer = products_Serializer(products, many=True)
        return JsonResponse(products__Serializer.data, safe=False)
        # 'safe=False' for objects serialization
    elif request.method == 'POST':
        product_data = JSONParser().parse(request)
        products__Serializer = products_Serializer(data=product_data)
        if products__Serializer.is_valid():
            products__Serializer.save()
            return JsonResponse(products__Serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(products__Serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# def search(request):
#     q=request.GET.get('q')
    
#     if q:
#         mediashop_products=ProductDocument.search().query("match",name=q)
#     else:
#         mediashop_products=''

#     return JsonResponse({'products':mediashop_products})
