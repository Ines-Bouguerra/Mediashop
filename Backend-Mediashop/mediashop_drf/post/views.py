from django.shortcuts import render

# Create your views here.posts = Post.objects.all().order_by("-date_created")
