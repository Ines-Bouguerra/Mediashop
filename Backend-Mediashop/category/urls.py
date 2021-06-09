from django.urls import path
from category import views
from .views import CreateCategory
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('api/categories/category-list',
         views.category_list.as_view(), name='category_list'),
    path('api/categories/subcategory-list',
         views.subcategory_list.as_view(), name='subcategory_list'),
    path('api/categories/category/<str:slug>/',
         views.category_details, name='category_detail'),
    path('api/categories/category_create',
         CreateCategory.as_view(), name='Createcategory'),
    path('api/category/<int:pk>',

         views. CategoryDetail.as_view(), name='CategoryDetail'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
