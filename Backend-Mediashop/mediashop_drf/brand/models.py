from django.db import models
from audioop import reverse

def upload_to(instance, filename):
    return 'brand/{filename}'.format(filename=filename)
class Brand(models.Model):

    name = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    image = models.ImageField(("Image"), upload_to=upload_to)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def get_absolute_url(self):
        return reverse('brand_detail', kwargs={'slug': self.slug})

    def __str__(self):
        return self.name
