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
    path('api/products/top_promotion',
         views.top_promotion.as_view(), name='top_promotion'),
    path('api/products/product_list_by_category/<str:category_slug>',
         views.product_list_by_category, name='product_list_by_category'),
    path('api/speech_to_text',
         views.speech_to_text, name='speech_to_text'),
     path('api/products/filter',
         views.filter_product_list.as_view(), name='filter_product_list'),
      path('api/products/order',
         views.productsListView.as_view(), name='productsListView'),
]
