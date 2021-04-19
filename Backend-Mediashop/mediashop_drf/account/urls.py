from django.conf.urls import url
from account.views import registration_view, wishlist, add_to_wishlist
from django.urls import path
from . import views
app_name = "account"
urlpatterns = [
    url(r'^api/authentication/register$',
        registration_view, name='registration_view'),
    # Wish List
    # path("wishlist", views.wishlist, name="wishlist"),
    # path("wishlist/add_to_wishlist/<int:id>",
    #      views.add_to_wishlist, name="user_wishlist"),
]
