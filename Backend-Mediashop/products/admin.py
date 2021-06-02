from django.contrib import admin
from .models import *





class WishlistItemAdmin(admin.ModelAdmin):
    model = WishlistItem


admin.site.register(Product)
admin.site.register(WishlistItem, WishlistItemAdmin)
