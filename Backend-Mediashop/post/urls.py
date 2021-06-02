from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from post import views
from .views import PostListCreateAPIView, PostDetailsAPIView

urlpatterns = [
    path('api/posts/', PostListCreateAPIView.as_view(), name='api-post-list'),
    path('api/posts/<int:pk>/', PostDetailsAPIView.as_view(),
         name='api-post-details'),
    path('api/gettoken/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/refresh_token/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
#     path('api/addPost/<int:id>/', views.addPost,
#          name='addpost'),
]
