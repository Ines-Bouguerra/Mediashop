from django.urls import path
from .views import CreateContact, ContactView
from contact import views
urlpatterns = [

    path('api/contact',
         CreateContact.as_view(), name='Contact'),
    path('api/admin/replay',
         ContactView.as_view(), name='sendEmail'),
]
