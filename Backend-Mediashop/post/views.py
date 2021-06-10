from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from post.models import Post
from post.serializers import PostSerializer


class PostListCreateAPIView(ListCreateAPIView):
    """
    API view to retrieve list of posts or create new
    """
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    serializer_class = PostSerializer
    queryset = Post.objects.all()


class PostDetailsAPIView(RetrieveUpdateDestroyAPIView):
    """
    API view to retrieve, update or delete post
    """
    serializer_class = PostSerializer
    queryset = Post.objects.all()


class PostViewset(APIView):

    def post(self, request):
        try:
            serializer = PostSerializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Post Data Save Successfully"}
        except:
            dict_response = {"error": True,
                             "message": "Error During Saving Post Data"}
        return Response(dict_response)

    def get(self, request):
        post = Post.objects.all()
        serializer = PostSerializer(
            post, many=True, context={"request": request})
        response_dict = {
            "error": False, "message": "All Post List Data", "data": serializer.data}
        return Response(response_dict)


class PostDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """

    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        post = self.get_object(pk)
        serializer = PostSerializer(post, context={"request": request})
        return Response({"error": False, "message": "Single Data Fetch", "data": serializer.data})

    def put(self, request,  pk):
        post = self.get_object(pk)
        serializer = PostSerializer(
            post, data=request.data, context={"request": request})
        serializer.is_valid()
        serializer.save()
        return Response({"error": False, "message": "Data Has Been Updated"})

    def delete(self, request, pk):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
