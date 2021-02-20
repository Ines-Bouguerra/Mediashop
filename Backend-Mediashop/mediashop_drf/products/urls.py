from django.conf.urls import url
from products import views

urlpatterns = [
    url(r'^api/product$', views.product_list, name='product_list'),
    url(r'^api/search_view$', views.search_view, name='search_view'),




]
