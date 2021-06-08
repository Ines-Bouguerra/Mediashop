from rest_framework import serializers
from .models import Brand

class brand_Serializer(serializers.ModelSerializer):

    class Meta:
        model = Brand
        fields =(
            'id',
            'name',
            'slug',
            'image',
            'created_at',
            'updated_at'
        )
        ordering = ('name', 'created_at')