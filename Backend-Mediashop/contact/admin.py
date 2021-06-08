from django.contrib import admin
from .models import *




class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email','phone_number','message','added_at']
    list_filter = ['email']
    readonly_fields = ('name', 'email','phone_number','message','added_at')

admin.site.register(Contact, ContactAdmin)