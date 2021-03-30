from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Category
from .serializers import category_Serializer, subcategory_Serializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import permissions
from rest_framework.views import APIView

from rest_framework.parsers import MultiPartParser, FormParser

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
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    try:
        category = Category.objects.get(slug=slug)
    except Category.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = category_Serializer(category)
        return Response(serializer.data)


class CreateCategory(APIView):

    parser_classes = [MultiPartParser, FormParser]

    
    def post(self, request, format=None):
        print(request.data)
        serializer = category_Serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
