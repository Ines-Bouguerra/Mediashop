from django.http import Http404
from rest_framework.views import APIView
from products.serializers import WishlistSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from django.core.cache import cache
from rest_framework.permissions import BasePermission
from .search import lookup
from django.shortcuts import get_object_or_404
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.response import Response
from products.models import Product, WishlistItem
from products.serializers import products_Serializer
from rest_framework.decorators import api_view
from products.pagination import ProductPageNumberPagination
from rest_framework.generics import ListAPIView
from category.models import Category
import speech_recognition as sr
import webbrowser as web
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination


@api_view(['GET', 'POST', 'DELETE'])
def product_list(request):
    query_params = request.GET
    query = query_params.get('query')
    context = {}
    if query != '':
        paginator = ProductPageNumberPagination()
        results = lookup(query)
        context['results'] = paginator.paginate_queryset(results, request)
        context['query'] = JsonResponse(query, safe=False)
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
                'retailer': product.retailer,
                'short_description': product.short_description,
                'description': product.description,
                'image': product.image,
                'discount': product.discount,
                'sub_category': product.sub_category,
                'url': product.url,
            }
            q_results.append(data)
            product = +1
        else:
            print("error")
    context['results'] = q_results
    return JsonResponse(context, safe=False)


# Top Promotions


class top_promotion(ListAPIView):
    discount = '10%'
    queryset = Product.objects.all().filter(discount=discount)
    serializer_class = products_Serializer


# Top rated products

# Filter Product By Category

@api_view(['GET'])
def product_list_by_category(request,  category_slug=None):

    category = None
    categories = Category.objects.all()
    products = Product.objects.all()

    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = products.filter(category=category)
        products__Serializer = products_Serializer(products, many=True)
        return JsonResponse(products__Serializer.data, safe=False)

# speech recognition


@api_view(['GET', 'POST', 'DELETE'])
def speech_to_text(request):

    path = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s"

    data = request.POST.get('record')
    r = sr.Recognizer()

    with sr.Microphone() as source:
        r.adjust_for_ambient_noise(source)

        print('Please Say something ')
        audio = r.listen(source)
        print(' Recognizing Now ... ')

        try:
            output = r.recognize_google(audio)
            print('You have said : '+output)
            data = output
            web.get(path).open(output)
        except Exception as e:
            print('Error :'+str(e))

    return JsonResponse({'data': data})
# filter


class filter_product_list(ListAPIView):
    queryset = Product.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('category', 'name', 'reference',
                     'brand', 'retailer', 'marketplaceId')
    serializer_class = products_Serializer


class productsListView(ListAPIView):

    model = Product

    def get_queryset(self):
        order_by = self.request.GET.get("orderby", "id")
        prod = Product.objects.all().order_by(order_by)

    def get_context_data(self, **kwargs):
        context = super(productsListView, self).get_context_data(**kwargs)
        context["orderby"] = self.request.GET.get("orderby", "id")
        context["all_table_fields"] = Product._meta.get_fields()
        return context

    serializer_class = products_Serializer


class WishlistListCreateAPIView(ListCreateAPIView):

    serializer_class = WishlistSerializer
    queryset = WishlistItem.objects.all()


class WishlistDetailsAPIView(RetrieveUpdateDestroyAPIView):

    serializer_class = WishlistSerializer
    queryset = WishlistItem.objects.all()


class WishlistItemViewset(APIView):

    def post(self, request):
        try:
            serializer = WishlistSerializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Wishlist Data Save Successfully"}
        except:
            dict_response = {"error": True,
                             "message": "Error During Saving Wishlist Data"}
        return Response(dict_response)

    def get(self, request):
        wishlistitem = WishlistItem.objects.all()
        serializer = WishlistSerializer(
            wishlistitem, many=True, context={"request": request})
        response_dict = {
            "error": False, "message": "All WishList  Data", "data": serializer.data}
        return Response(response_dict)


class WishlistItemDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """

    def get_object(self, pk):
        try:
            return WishlistItem.objects.get(pk=pk)
        except WishlistItem.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        wishlist = self.get_object(pk)
        serializer = WishlistSerializer(wishlist, context={"request": request})
        return Response({"error": False, "message": "Single Data Fetch", "data": serializer.data})

    def delete(self, request, pk):
        wishlist = self.get_object(pk)
        wishlist.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
