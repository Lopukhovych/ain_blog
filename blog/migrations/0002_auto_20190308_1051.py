# Generated by Django 2.1.7 on 2019-03-08 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='permission',
            name='title',
            field=models.CharField(choices=[('create', 'create'), ('read', 'read'), ('edit', 'edit'), ('delete', 'delete')], max_length=256),
        ),
    ]
