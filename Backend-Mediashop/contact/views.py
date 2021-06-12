from django.core.mail import EmailMultiAlternatives
from rest_framework import status
from rest_framework.decorators import api_view
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import send_mail
from .serializers import contact_Serializer
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Contact


class CreateContact(APIView):

    def post(self, request):
        try:
            serializer = contact_Serializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Contact Saved Successfully"}
        except:
            dict_response = {"error": True,
                             "message": "Error During Saving Contact Data"}
        return Response(dict_response)

    def get(self, request):
        contact = Contact.objects.all().order_by('-added_at')
        serializer = contact_Serializer(
            contact, many=True, context={"request": request})
        response_dict = {
            "error": False, "message": "All Contact List Data", "data": serializer.data}
        return Response(response_dict)


class ContactView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = contact_Serializer(
            data=request.data, context={"request": request})
        if serializer.is_valid(raise_exception=True):
            data = serializer.validated_data
            email = data.get('email')
            name = data.get('name')
            html_content1 = '<strong>Cordialement.</strong>'
            html_content2 = '<p>Thanks for joining us . </br><strong>Mediashop</strong></p>'
            message = EmailMultiAlternatives('Mediashop : {}'.format(name),
                                             ' {}'.format(
                                                 data.get('message')),
                                             'ines.bouguerra2207@gmail.com',
                                             (email,),)
            message.send()
            # send_mail(
            #     'Mediashop : {}'.format(name),
            #     'Here is the message. {}'.format(data.get('message')),
            #     'ines.bouguerra2207@gmail.com',
            #     (email,),
            #     fail_silently=False,
            # )
            return Response({"success": "Sent"})
        return Response({'success': "Failed"}, status=status.HTTP_400_BAD_REQUEST)
