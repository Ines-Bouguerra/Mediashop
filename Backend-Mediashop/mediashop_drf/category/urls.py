from django.urls import path
from category import views


urlpatterns = [
    path('api/categories/category-list',
         views.category_list.as_view(), name='category_list'),
    path('api/categories/subcategory-list',
         views.subcategory_list.as_view(), name='subcategory_list'),
]
