from django.contrib import admin
from .models import *



class BrandAdmin(admin.ModelAdmin):
    readonly_fields = ("created_at", "updated_at")

admin.site.register(Brand, BrandAdmin)
