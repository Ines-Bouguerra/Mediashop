
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.http import Http404
from .models import Brand
from .serializers import brand_Serializer


class BrandViewset(APIView):

    def post(self, request):
        try:
            serializer = brand_Serializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Brand Data Save Successfully"}
        except:
            dict_response = {"error": True,
                             "message": "Error During Saving Brand Data"}
        return Response(dict_response)

    def get(self, request):
        brand = Brand.objects.all()
        serializer = brand_Serializer(
            brand, many=True, context={"request": request})
        response_dict = {
            "error": False, "message": "All Brand List Data", "data": serializer.data}
        return Response(response_dict)


class BrandDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """

    def get_object(self, pk):
        try:
            return Brand.objects.get(pk=pk)
        except Brand.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        brand = self.get_object(pk)
        serializer = brand_Serializer(brand, context={"request": request})
        return Response({"error": False, "message": "Single Data Fetch", "data": serializer.data})

    def put(self, request,  pk):
        brand = self.get_object(pk)
        serializer = brand_Serializer(
            brand, data=request.data, context={"request": request})
        serializer.is_valid()
        serializer.save()
        return Response({"error": False, "message": "Data Has Been Updated"})

    def delete(self, request, pk):
        brand = self.get_object(pk)
        brand.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
