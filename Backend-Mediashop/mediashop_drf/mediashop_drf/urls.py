"""mediashop_drf URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url, include
# from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [

    url(r'^', include('products.urls')),
    url(r'^', include('account.urls')),
    url(r'^', include('category.urls')),
    url(r'^', include('post.urls')),
    url(r'^', include('rating.urls')),
    path('admin/', admin.site.urls),
    # path('authentication/', obtain_auth_token),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),

]


urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]

admin.site.index_title = "Mediashop"
admin.site.site_header = "Mediashop Price Comparison Admin"
admin.site.site_title = "Price Comparison"
