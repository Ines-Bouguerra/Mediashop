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


