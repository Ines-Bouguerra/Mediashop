from django.conf.urls import url
from django.urls import path
from products import views

urlpatterns = [
    url(r'^api/products/product_list$', views.product_list, name='product_list'),
    url(r'^api/products/search_view$', views.search_view, name='search_view'),
    # path('api/products/<slug:category_slug>',
    #      views.product_list2, name='product_by_category'),




]
