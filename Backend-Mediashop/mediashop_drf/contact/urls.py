from django.urls import path
from .views import CreateContact
urlpatterns = [

    path('api/contact',
         CreateContact.as_view(), name='Contact'),


]
