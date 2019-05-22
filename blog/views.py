import json
from django.http import JsonResponse, HttpResponse
from django.core.paginator import Paginator
from .models import User, Article, Group
from django.core import serializers
from django.views import View
from datetime import timedelta, datetime
from django.db.models import Prefetch

month_ago = datetime.now() - timedelta(weeks=4)


class ArticleList(View):
    def get(self, request):
        try:
            article_list = Article.objects.all().order_by('-public_date')
            # TODO Change article list load number
            paginator = Paginator(article_list, 2)
            page = int(request.GET.get('page', 1))
            object_list = paginator.get_page(page).object_list
            list_result = list(object_list.values())
        except Exception:
            return JsonResponse(json.dumps({'error': True}), safe=False)
        return JsonResponse({'article_list': list_result, 'page_number': paginator.num_pages}, safe=False)


class ArticleItem(View):
    def get(self, request):
        data = json.dumps({'hello': 'world'})
        return JsonResponse(data, safe=False)

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
                'imgLink': str(post.source_path),

            }
        else:
            return {}


class AdvertisementList(View):
    def get(self):
        pass
