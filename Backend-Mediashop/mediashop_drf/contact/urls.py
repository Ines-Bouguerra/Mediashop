from django.urls import path
from .views import CreateContact, thanks
urlpatterns = [

    path('api/contact',
         CreateContact.as_view(), name='Contact'),
    path("thanks/", thanks, name="thanks"),


]
