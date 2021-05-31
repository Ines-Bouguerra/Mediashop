# Generated by Django 3.2.3 on 2021-05-31 15:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0008_auto_20210531_1608'),
        ('post', '0006_auto_20210526_1011'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={},
        ),
        migrations.RenameField(
            model_name='post',
            old_name='created_at',
            new_name='create_at',
        ),
        migrations.RemoveField(
            model_name='post',
            name='author',
        ),
        migrations.RemoveField(
            model_name='post',
            name='image',
        ),
        migrations.RemoveField(
            model_name='post',
            name='text',
        ),
        migrations.RemoveField(
            model_name='post',
            name='title',
        ),
        migrations.AddField(
            model_name='post',
            name='comment',
            field=models.CharField(blank=True, max_length=250),
        ),
        migrations.AddField(
            model_name='post',
            name='ip',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name='post',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.product'),
        ),
        migrations.AddField(
            model_name='post',
            name='rate',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='post',
            name='status',
            field=models.CharField(choices=[('New', 'New'), ('True', 'True'), ('False', 'False')], default='New', max_length=10),
        ),
        migrations.AddField(
            model_name='post',
            name='subject',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='post',
            name='update_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='post',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
