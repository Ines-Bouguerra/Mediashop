# Generated by Django 3.2.3 on 2021-06-05 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0003_alter_contact_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='added_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]