from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import login_required
from account.serializers import RegistrationSerializer
from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from products.models import Product
from django.urls import reverse


@api_view(['POST', ])
def registration_view(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            account = serializer.save()
            data['response'] = "successfully registred a new user."
            data['email'] = account.email
            data['first_name'] = account.first_name
            data['last_name'] = account.last_name
        else:
            data = serializer.errors
        return Response(data)


def wishlist(request):
    products = Product.objects.filter(users_wishlist=request.user)
    return JsonResponse({"wishlist": products})


@login_required
def add_to_wishlist(request, id):
    product = get_object_or_404(Product, id=id)
    if product.users_wishlist.filter(id=request.user.id).exists():
        product.users_wishlist.remove(request.user)
        messages.success(request, product.name +
                         " has been removed from your WishList")
    else:
        product.users_wishlist.add(request.user)
        messages.success(request, "Added " +
                         product.name + " to your WishList")
    return HttpResponseRedirect(request.META["HTTP_REFERER"])
