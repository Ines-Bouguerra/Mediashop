from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Category
from .serializers import category_Serializer


class category_list(ListAPIView):
    queryset = Category.objects.filter(parent__isnull=True)
    serializer_class = category_Serializer
