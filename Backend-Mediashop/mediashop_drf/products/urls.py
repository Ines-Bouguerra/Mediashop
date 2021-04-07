from django.conf.urls import url
from django.urls import path
from products import views

urlpatterns = [
    url(r'^api/products/product_list$', views.product_list, name='product_list'),
    path('api/products/product_detail/<int:pk>',
         views.product_detail, name='product_detail'),
    url(r'^api/products/search_view$', views.search_view, name='search_view'),
    url(r'^api/products/compare_product$',
        views.compare_product, name='compare_product'),
]
