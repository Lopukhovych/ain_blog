import json
from django.http import JsonResponse, HttpResponse
from django.core.paginator import Paginator
from .models import User, Article, Group, Comment
from django.views import View
from datetime import timedelta, datetime
from django.db.models import Prefetch
from django.forms.models import model_to_dict
from django.db.models.fields.files import FieldFile

month_ago = datetime.now() - timedelta(weeks=4)


def return_url_from_file_field(model_dict):
    for item in model_dict:
        if isinstance(model_dict[item], FieldFile):
            model_dict[item] = model_dict[item].url
    return model_dict


class ArticleList(View):
    def get(self, request):
        try:
            article_list = Article.objects.filter(status='published').order_by('-public_date')
            # TODO Change article list load number
            paginator = Paginator(article_list, 2)
            page = int(request.GET.get('page', 1))
            object_list = paginator.get_page(page).object_list
            list_result = list(object_list.values(
                'id', 'title', 'preview', 'author_id', 'view_number', 'comment_list',
                'source_path', 'public_date')
            )
        except Exception:
            return JsonResponse(json.dumps({'error': True}), safe=False)
        return JsonResponse({'article_list': list_result, 'page_number': paginator.num_pages}, safe=False)


class ArticleItem(View):
    def get(self, request, article_id):
        try:
            article_item = Article.objects.get(id=article_id)

            data_list = model_to_dict(article_item, exclude=['preview', 'status', 'created_date', 'updated_date'])
            data_list['source_path'] = data_list['source_path'].url

            data_list['author'] = return_url_from_file_field(model_to_dict(article_item.author, exclude=['role', 'status']))

            data_list['category_list'] = article_item.group_list()

            comment_list_query_set = Comment.objects.filter(article=article_item.id)
            comment_list = [{
                'id': comment.id,
                'article_id': comment.article_id,
                'text': comment.text,
                'time': comment.time,
                'author': return_url_from_file_field(model_to_dict(comment.author, exclude=['role', 'status'])),
            } for comment in comment_list_query_set]
            data_list['comment_list'] = comment_list

        except Exception as error:
            return JsonResponse(json.dumps({'error': list(error)}), safe=False)
        return JsonResponse(data_list, safe=False)

    def post(self, request):
        try:
            json_data = json.loads(request.body)
            print('title: ', json_data.get('title'))
            # print('article_data: ', json_data['title'])
            # print('article_data1: ', request.body['title'])
        except Exception:
            return JsonResponse(json.dumps({'success': False}), safe=False)
        return JsonResponse(json.dumps({'success': True}), safe=False)


class PopularList(View):
    def get(self, request):
        try:

            # TODO Change article list load number
            article_list = Article.objects \
                               .filter(public_date__gte=month_ago) \
                               .order_by('-view_number', '-public_date')[:2]
        except Exception:
            return JsonResponse(json.dumps({'success': False}), safe=False)
        return JsonResponse(list(article_list.values()), safe=False)


class GroupList(View):
    def get(self, request):
        try:
            group_list = Group.objects.all().prefetch_related(
                Prefetch(
                    'article_list',
                    queryset=Article.objects.filter(public_date__gte=month_ago).order_by('-view_number', '-public_date')
                )
            )
            data_list = [{
                'id': group.id,
                'title': group.title,
                'link': group.link,
                'post_amount': len(group.article_list.all()),
                'post': self.get_post_dict(group.article_list.all().first())
            } for group in group_list]
        except Exception as error:
            return JsonResponse(json.dumps({'error': error}), safe=False)
        return JsonResponse(data_list, safe=False)

    def get_post_dict(self, post):
        if post:
            category_list = list(post.group_set.all().values('id', 'link', 'title'))
            return {
                'id': post.id,
                'title': post.title,
                'category_list': category_list,
                'public_date': post.public_date.now(),
                'author': User.objects.filter(id=1).values('id', 'name')[0],
                'imgLink': post.source_path.url,

            }
        else:
            return {}


class AdvertisementList(View):
    def get(self, request):
        data_list = [
            dict(type='social_media', params=self.get_social_media()),
            dict(type='instagram', params=self.get_instagram_media()),
        ]
        return JsonResponse(data_list, safe=False)

    def get_social_media(self):
        return dict(
            title='Sent your email to receive the latest news',
            socialInfo='Subscribe our channels in social networks to be a part of community',
            socialNetworkList=[
                {'title': 'facebook', 'link': '/not-provided-yet', 'followers': 22},
                {'title': 'twitter', 'link': '/not-provided-yet', 'followers': 23},
                {'title': 'google-plus', 'link': '/not-provided-yet', 'followers': 44000},
                {'title': 'instagram', 'link': '/not-provided-yet', 'followers': 22060},
            ])

    def get_instagram_media(self):
        return [
            '/media/article_images/galery-1.jpg',
            '/media/article_images/galery-2.jpg',
            '/media/article_images/galery-3.jpg',
            '/media/article_images/galery-4.jpg',
            '/media/article_images/galery-5.jpg',
            '/media/article_images/galery-6.jpg',
        ]
