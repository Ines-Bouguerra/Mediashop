from django.urls import path

from .views import PostListCreateAPIView,PostDetailsAPIView

urlpatterns = [
    path('api/posts/', PostListCreateAPIView.as_view(), name='api-post-list'),
    path('api/posts/<int:pk>/', PostDetailsAPIView.as_view(), name='api-post-details'),
]