from django.conf.urls import url
from products import views

urlpatterns = [
    url(r'^api/product$', views.product_list),

]
