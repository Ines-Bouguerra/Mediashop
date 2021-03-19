from audioop import reverse

from django.db import models
from mptt.fields import TreeForeignKey
from mptt.models import MPTTModel


class Category(MPTTModel):
    parent = TreeForeignKey('self', on_delete=models.CASCADE,
                            null=True, blank=True, related_name='children')
    name = models.CharField(max_length=150, unique=True)
    slug = models.SlugField(unique=True)
    image = models.ImageField(blank=True, upload_to='images/categories/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class MPTTMeta:
        verbose_name_plural = 'Categories'
        order_insertion_by = ['name']

    def get_absolute_url(self):
        return reverse('category_detail', kwargs={'slug': self.slug})

    def __str__(self):
        return self.name
