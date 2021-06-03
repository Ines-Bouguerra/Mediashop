from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect
from post.models import Post
from post.serializers import PostSerializer


class PostListCreateAPIView(ListCreateAPIView):
    """
    API view to retrieve list of posts or create new
    """
    # authentication_classes = (JWTAuthentication,)
    # permission_classes = (IsAuthenticated,)

    serializer_class = PostSerializer
    queryset = Post.objects.all()


class PostDetailsAPIView(RetrieveUpdateDestroyAPIView):
    """
    API view to retrieve, update or delete post
    """
    serializer_class = PostSerializer
    queryset = Post.objects.all()

# @api_view(['GET', 'POST'])
# def addPost(request,id):
#    url = request.META.get('HTTP_REFERER')  # get last url
#    #return HttpResponse(url)
#    if request.method == 'POST':  # check post
#     #   form = CommentForm(request.POST)
#       post_data = JSONParser().parse(request)
#       post__Serializer = PostSerializer(data=post_data)
#       if  post__Serializer.is_valid():
#          data = Post()  # create relation with model
#          data.ip = request.META.get('REMOTE_ADDR')
#          data.product_id=id
#          current_user= request.user
#          data.user_id=current_user.id
#          data.save()  # save data to table
#          messages.success(request, "Your review has ben sent. Thank you for your interest.")
#          return HttpResponseRedirect(url)

#    return HttpResponseRedirect(url)


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
