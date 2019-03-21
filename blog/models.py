from django.db import models


# Create your models here.


class Permission(models.Model):
    class PermissionList:
        create = "create"
        read = "read"
        edit = "edit"
        delete = "delete"

        choices = (
            (create, "create"),
            (read, "read"),
            (edit, "edit"),
            (delete, "delete"),
        )

    title = models.CharField(max_length=256, choices=PermissionList.choices)

    def __str__(self):
        return self.title


class Role(models.Model):
    title = models.CharField(max_length=256)
    permission_list = models.CharField(max_length=256)

    def __str__(self):
        return self.title


class User(models.Model):
    class UserStatus:
        active = "active"
        in_review = "in_review"

        choices = (
            (active, "Active"),
            (in_review, "In review"),
        )

    name = models.TextField(max_length=256)
    role = models.ForeignKey(Role, null=True, related_name='user', on_delete=models.CASCADE)
    status = models.CharField(max_length=32, choices=UserStatus.choices)

    def __str__(self):
        return '%s %s' % (self.name, self.status)


class Group(models.Model):
    title = models.CharField(max_length=256)
    article_list = models.CharField(max_length=512) # lasy loading


class Article(models.Model):
    class ArticleStatus:
        in_review = "in_review"
        accepted = "accepted"
        declined = "declined"
        published = "published"

        choices = (
            (in_review, "In review"),
            (accepted, "Accepted"),
            (declined, "Declined"),
            (published, "Published"),
        )

    title = models.CharField(max_length=256)
    text = models.CharField(max_length=2048)
    author = models.ForeignKey(User, null=True, related_name='article', on_delete=models.CASCADE)
    group = models.ForeignKey(Group, null=True, related_name='article', on_delete=models.CASCADE)
    status = models.CharField(max_length=32, choices=ArticleStatus.choices)
    view_number = models.IntegerField()
    comment_list = models.CharField(max_length=512)
    source_path = models.URLField(max_length=256)
    public_date = models.DateTimeField(auto_now=False, auto_now_add=False)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now_add=True)


class Comment(models.Model):
    text = models.CharField(max_length=400)
    author_name = models.CharField(max_length=256)
    time = models.DateTimeField(auto_now_add=True)
