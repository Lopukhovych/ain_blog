from django.contrib import admin
from .models import User, Role, Permission, Article, Group, Comment

# Register your models here.

admin.site.register(User)
admin.site.register(Permission)
admin.site.register(Role)
admin.site.register(Article)
admin.site.register(Group)
admin.site.register(Comment)

