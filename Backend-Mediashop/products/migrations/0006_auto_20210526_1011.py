# Generated by Django 3.2.3 on 2021-05-26 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0006_auto_20210526_1011'),
        ('products', '0005_auto_20210525_2305'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='posts',
            field=models.ManyToManyField(blank=True, related_name='products', to='post.Post'),
        ),
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
