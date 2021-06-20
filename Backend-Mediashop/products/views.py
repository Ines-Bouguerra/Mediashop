from post.serializers import PostSerializer
from post.models import Post
from contact.serializers import contact_Serializer
from contact.models import Contact
from datetime import datetime, timedelta
from account.models import Account
from brand.models import Brand
from django.http import Http404
from rest_framework.views import APIView
from products.serializers import WishlistSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .search import lookup
from django.shortcuts import get_object_or_404
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from products.models import Product, WishlistItem
from products.serializers import products_Serializer
from category.serializers import category_Serializer
from brand.serializers import brand_Serializer
from post.serializers import UserSerializer
from rest_framework.decorators import api_view
from products.pagination import ProductPageNumberPagination
from rest_framework.generics import ListAPIView
from category.models import Category
import webbrowser as web
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework.filters import OrderingFilter
from django.core.paginator import Paginator


@api_view(['GET'])
def product_list(request):
    query_params = request.GET
    query = query_params.get('query')
    category_slug = query_params.get('category_slug')
    brand_slug = query_params.get('brand_slug')
    price = query_params.get('price')
    paginator = ProductPageNumberPagination()
    products = Product.objects.all()
    context = {}
    if query is not None:

        results = lookup(query)
        context['results'] = results
        context['query'] = query
        print(results)

        if category_slug:
            category = get_object_or_404(Category, slug=category_slug)
            products = products.filter(category=category)

        if brand_slug:
            brand = get_object_or_404(Brand, slug=brand_slug)
            products = products.filter(brand=brand)

        if price:
            products = products.filter(price=price)

        products__Serializer = products_Serializer(
            paginator.paginate_queryset(products, request),
            context={"request": request}, many=True)
        return JsonResponse({
            'context': context,
            'results': products__Serializer.data,
        }
        )


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

    serializer_class = products_Serializer
    queryset = Product.objects.all()
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filter_fields = ('name', 'priceString', 'retailer', 'category', 'brand')
    ordering_fields = ('name', 'price')


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


class ProductAdminViewset(APIView):

    def post(self, request):
        try:
            serializer = products_Serializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Product Data Save Successfully"}
        except:
            dict_response = {"error": True,
                             "message": "Error During Saving Product Data"}
        return Response(dict_response)


class ProductAdminDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """

    def get_object(self, pk):
        try:
            return Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        product = self.get_object(pk)
        serializer = products_Serializer(product, context={"request": request})
        return Response({"error": False, "message": "Single Data Fetch", "data": serializer.data})

    def delete(self, request, pk):
        product = self.get_object(pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# from rest_framework.permissions import IsAuthenticated
# from rest_framework_simplejwt.authentication import JWTAuthentication


class HomeApiViewset(APIView):

    def get(self, request):
        product_count = Product.objects.all()
        product_count_serializer = products_Serializer(
            product_count, many=True, context={"request": request})

        category_count = Category.objects.all()
        category_count_serializer = category_Serializer(
            category_count, many=True, context={"request": request})

        brand_count = Brand.objects.all()
        brand_count_serializer = brand_Serializer(
            brand_count, many=True, context={"request": request})

        user_count = Account.objects.all()
        user_count_serializer = UserSerializer(
            user_count, many=True, context={"request": request})

        post_count = Post.objects.all()
        post_count_serializer = PostSerializer(
            post_count, many=True, context={"request": request})

        current_date = datetime.today().strftime("%Y-%m-%d")

        new_contact = Contact.objects.filter(added_at__date=current_date)
        new_contact_serializer = contact_Serializer(
            new_contact, many=True, context={"request": request})

        new_comment = Post.objects.filter(status="New")
        new_comment_serializer = PostSerializer(
            new_comment, many=True, context={"request": request})

        new_customer = Account.objects.filter(date_joined__date=current_date)
        new_customer_serializer = UserSerializer(
            new_customer, many=True, context={"request": request})

        dict_respone = {"error": False, "message": "Home Page Data",
                        "product_count": len(product_count_serializer.data),
                        "category_count": len(category_count_serializer.data),
                        "brand_count": len(brand_count_serializer.data),
                        "user_count": len(user_count_serializer.data)-1,
                        "new_contact": len(new_contact_serializer.data),
                        "post_count": len(post_count_serializer.data),
                        "new_comment": len(new_comment_serializer.data),
                        "new_customer": len(new_customer_serializer.data), }
        return Response(dict_respone)
