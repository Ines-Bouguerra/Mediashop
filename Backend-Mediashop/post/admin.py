from django.contrib import admin
from .models import *





class PostAdmin(admin.ModelAdmin):
    list_display=['subject','comment','status','create_at']
    list_filter=['status']
    read_only=('subject','comment','user','product','rate')



admin.site.register(Post,PostAdmin)

