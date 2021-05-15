
from django.shortcuts import render
from .serializers import contact_Serializer
from django.http import HttpResponse
from django.urls import reverse_lazy

from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

    
class CreateContact(APIView):

    def post(self, request, format=None):
        serializer = contact_Serializer(data=JSONParser().parse(request))
        if serializer.is_valid():
            serializer.save()
            success_url = reverse_lazy("thanks")
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def thanks(request):
    return HttpResponse("Thank you! Will get in touch soon.")