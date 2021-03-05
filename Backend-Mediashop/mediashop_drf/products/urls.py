from django.conf.urls import url
from products import views

urlpatterns = [
    url(r'^api/products/product_list$', views.product_list, name='product_list'),
    url(r'^api/products/search_view$', views.search_view, name='search_view'),
    url(r'^api/products/category_list$', views.category_list, name='category_list'),




]
