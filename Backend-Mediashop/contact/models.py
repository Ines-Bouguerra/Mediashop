
from django.db import models
from django.core.validators import RegexValidator


class Contact(models.Model):
    id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=255)
    phone_regex = RegexValidator(
        regex=r'^\+216?1?\d{9,13}$', message="Phone number must be entered in the format: '+999999999'. Up to 16 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17)
    message = models.TextField(max_length=255)
    added_at = models.DateTimeField(auto_now_add=True,null=True)

    def __str__(self):
        return self.email
