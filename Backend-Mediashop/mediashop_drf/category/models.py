# from django.db import models
# from mptt.models import MPTTModel
# from mptt.fields import TreeForeignKey
# class Category(MPTTModel):

#     name = models.CharField(max_length=150, unique=True)
#     parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')
#     slug = models.SlugField(unique=True, default='DEFAULT VALUE')
#     image=models.ImageField(blank=True, upload_to='images/')
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     class MPTTMeta:
#         verbose_name_plural = 'Categories'
#         order_insertion_by = ['name']

#     def __str__(self):
#         return self.name
