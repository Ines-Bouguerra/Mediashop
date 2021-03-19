from django.urls import path
from category import views


urlpatterns = [
    path('api/categories/category-list',
         views.category_list.as_view(), name='category_list'),
]
