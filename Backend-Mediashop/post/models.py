from django.db import models
from account.models import Account
from products.models import Product


def upload_to(instance, filename):
    return 'post/{filename}'.format(filename=filename)


class Post(models.Model):

    id = models.AutoField(primary_key=True)
    STATUS = (
        ('New', 'New'),
        ('True', 'True'),
        ('False', 'False'),
    )
    product = models.ForeignKey(Product, on_delete=models.CASCADE,blank=True, null=True)
    user = models.ForeignKey(Account, on_delete=models.CASCADE,blank=True, null=True)
    subject = models.CharField(max_length=50, blank=True)
    comment = models.CharField(max_length=250, blank=True)
    rate = models.IntegerField(default=1)
    ip = models.CharField(max_length=20, blank=True)
    status = models.CharField(max_length=10, choices=STATUS, default='New')
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.subject

    # id = models.AutoField(primary_key=True)
    # title = models.CharField(max_length=100, blank=True)
    # text = models.TextField(max_length=250, blank=True)
    # # product = models.ForeignKey(
    # #     Product, related_name='posts', on_delete=models.CASCADE, blank=True, null=True)
    # author = models.ForeignKey(
    #     Account, related_name='posts', on_delete=models.CASCADE, blank=True, null=True)
    # image = models.ImageField(null=True, blank=True, upload_to=upload_to)
    # created_at = models.DateTimeField(auto_now_add=True)
    # class Meta:
    #     verbose_name_plural = 'Posts'

    # def __str__(self):
    #     return '%s' % self.title