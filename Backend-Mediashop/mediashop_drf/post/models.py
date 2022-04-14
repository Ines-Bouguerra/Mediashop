from django.db import models
from account.models import Account


class Post(models.Model):
    post_created_by = models.ForeignKey(
        Account, on_delete=models.CASCADE, related_name="user_creator_post")
    post_text = models.CharField(max_length=255, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Posts'

    def __str__(self):
        return f'{self.post_text}'
