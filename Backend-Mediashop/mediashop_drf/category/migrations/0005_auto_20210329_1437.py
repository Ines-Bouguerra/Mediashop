# Generated by Django 3.0.5 on 2021-03-29 13:37

import category.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0004_auto_20210329_1429'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='image',
            field=models.ImageField(upload_to=category.models.upload_to, verbose_name='Image'),
        ),
    ]
