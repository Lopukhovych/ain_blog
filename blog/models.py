from django.db import models
from django.utils import timezone


def upload_article_image_location(instance, filename):
    return 'article_images/%s_%s' % (instance.id, filename)


def upload_user_image_location(instance, filename):
    return 'users_images/%s_%s_%s' % (str(instance.id), instance.name, filename)


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
    short_info = models.CharField(max_length=512, blank=True)
    avatar = models.ImageField(upload_to=upload_user_image_location, null=True, blank=True, db_column='avatar')


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
    preview = models.CharField(max_length=256, blank=True)
    text = models.CharField(max_length=4096, blank=True)
    author = models.ForeignKey(User, null=True, related_name='article', on_delete=models.CASCADE)
    status = models.CharField(max_length=32, choices=ArticleStatus.choices)
    view_number = models.IntegerField(default=0, blank=True)
    comment_list = models.CharField(max_length=512, blank=True)
    source_path = models.ImageField(upload_to=upload_article_image_location, null=True, blank=True)
    public_date = models.DateTimeField(auto_now=False, auto_now_add=False, blank=True)
    created_date = models.DateTimeField(auto_now_add=False, blank=True, default=timezone.now)
    updated_date = models.DateTimeField(auto_now_add=False, blank=True, default=timezone.now)

    def group_list(self):
        return list(self.group_set.all().order_by('id').values('id', 'title', 'link'))


class Group(models.Model):
    title = models.CharField(max_length=256)
    link = models.CharField(max_length=64, default='/')
    preview = models.CharField(max_length=256, blank=True)
    article_list = models.ManyToManyField(Article)

    def __str__(self):
        return self.title + ', article_list: ' + str(
            list(self.article_list.all().values_list('id', flat=True).order_by('id')))


class Comment(models.Model):
    article = models.ForeignKey(Article, null=True, related_name='article', on_delete=models.CASCADE)
    author = models.ForeignKey(User, null=True, related_name='author', on_delete=models.CASCADE)
    text = models.CharField(max_length=400)
    time = models.DateTimeField(auto_now_add=True)
