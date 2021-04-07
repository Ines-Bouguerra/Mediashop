from .search import lookup
from django.shortcuts import get_object_or_404
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.response import Response
from products.models import Product
from products.serializers import products_Serializer
from rest_framework.decorators import api_view
from products.pagination import ProductPageNumberPagination


@api_view(['GET', 'POST', 'DELETE'])
def product_list(request):
    query_params = request.GET
    query = query_params.get('query')
    context = {}
    if query != '':
        paginator = ProductPageNumberPagination()
        results = lookup(query)
        context['results'] = paginator.paginate_queryset(results, request)
        context['query'] = paginator.paginate_queryset(query, request)
        return paginator.get_paginated_response(results)
    else:
        paginator = ProductPageNumberPagination()
        products = Product.objects.all()
        context = paginator.paginate_queryset(products, request)
        name = request.GET.get('name', None)
        if name is not None:
            products = products.filter(title__icontains=name)

        products__Serializer = products_Serializer(context, many=True)
        return paginator.get_paginated_response(products__Serializer.data)
        # 'safe=False' for objects serialization

    if request.method == 'POST':
        product_data = JSONParser().parse(request)
        products__Serializer = products_Serializer(data=product_data)
        if products__Serializer.is_valid():
            products__Serializer.save()
            return JsonResponse(products__Serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(products__Serializer.errors, status=status.HTTP_400_BAD_REQUEST)


"""
This Function going to display Detailed view of one perticuler product with the help of pk.
"""


@api_view(['GET'])
def product_detail(request, pk):
    products = Product.objects.get(id=pk)
    serializer = products_Serializer(products, many=False)
    return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST', 'DELETE'])
def search_view(request):
    query_params = request.GET
    q = query_params.get('q')
    context = {}
    if q is not None:
        results = lookup(q)
        context['results'] = results
        context['query'] = q
    return JsonResponse(context)


@api_view(['GET', 'POST', 'DELETE'])
def compare_product(request):
    query_params = request.GET
    name = query_params.get('name')
    reference = query_params.get('reference')
    priceString = query_params.get('priceString')
    products = Product.objects.all()
    context = {}
    q_results = []
    for product in products:
        if product.name == name and product.reference == reference and product.priceString == priceString:
            data = {
                'reference': product.reference,
                'name': product.name,
                'priceString': product.priceString,
                'brand': product.brand,
                'short_description': product.short_description,
                'description': product.description,
                'image': product.image,
                'discount': product.discount,
                'sub_category': product.sub_category,
            }
            q_results.append(data)
            product = +1
        else:
            print("error")
    context['results'] = q_results
    return JsonResponse(context, safe=False)
