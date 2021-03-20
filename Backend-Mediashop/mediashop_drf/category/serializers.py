from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField

from category.models import Category


class category_Serializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = (
            'id',
            'name',
            'slug',
            'parent',
            # 'children',
            'image',
            'created_at',
            'updated_at'
        )
        verbose_name_plural = 'Categories'
        ordering = ('name', 'created_at')


class subcategory_Serializer(serializers.ModelSerializer):
    children = RecursiveField(many=True)

    class Meta:
        model = Category
        fields = (
            'id',
            'name',
            'slug',
            'parent',
            'children',
            'image',
            'created_at',
            'updated_at'
        )
