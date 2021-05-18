from django.urls import path
from brand import views
urlpatterns = [
    path('api/brand',

         views. BrandViewset.as_view(), name='Brand'),
    path('api/brand/<int:pk>',

         views. BrandDetail.as_view(), name='BrandDetail'),


]
