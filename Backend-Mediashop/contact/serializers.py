from rest_framework import serializers
from contact.models import Contact

class contact_Serializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields =(
            'name',
            'email',
            'phone_number',
            'message'
        )
        ordering = ('name', 'email')