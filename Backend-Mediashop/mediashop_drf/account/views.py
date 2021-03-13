from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from account.serializers import RegistrationSerializer


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
