from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Category
from .serializers import category_Serializer, subcategory_Serializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


class category_list(ListAPIView):
    queryset = Category.objects.filter(parent__isnull=True)
    serializer_class = category_Serializer


class subcategory_list(ListAPIView):
    queryset = Category.objects.filter(parent__isnull=False)
    serializer_class = subcategory_Serializer


@api_view(['GET', 'PUT', 'DELETE'])
def category_details(request, slug):
    """
    Retrieve, update or delete a category instance.
    """
    try:
        category = Category.objects.get(slug=slug)
    except Category.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = category_Serializer(category)
        return Response(serializer.data)
