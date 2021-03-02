from django.conf.urls import url
from account.views import registration_view


app_name = "account"
urlpatterns = [
    url(r'^api/account/register$', registration_view, name='registration_view'),
]
