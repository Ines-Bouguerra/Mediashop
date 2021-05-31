from .serializers import contact_Serializer
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response


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
