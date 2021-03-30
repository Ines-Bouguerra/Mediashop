from audioop import reverse
from django.utils.translation import gettext_lazy as _
from django.db import models
from mptt.fields import TreeForeignKey
from mptt.models import MPTTModel

def upload_to(instance, filename):
    return 'categories/{filename}'.format(filename=filename)
class Category(MPTTModel):
    parent = TreeForeignKey('self', on_delete=models.CASCADE,
                            null=True, blank=True, related_name='children')
    name = models.CharField(max_length=150, unique=True)
    slug = models.SlugField(unique=True)
    image = models.ImageField(
        _("Image"), upload_to=upload_to)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class MPTTMeta:
        verbose_name_plural = 'Categories'
        order_insertion_by = ['name']

    def get_absolute_url(self):
        return reverse('category_detail', kwargs={'slug': self.slug})

    def __str__(self):
        return self.name

   