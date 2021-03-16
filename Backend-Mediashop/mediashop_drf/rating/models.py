from django.db import models
from account.models import Account


class Rating(models.Model):
    rating_created_by = models.ForeignKey(
        Account, on_delete=models.CASCADE, related_name="user_creator_rating")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Ratings'
