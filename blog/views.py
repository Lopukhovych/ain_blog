import json
from django.http import JsonResponse, HttpResponse
from django.core.paginator import Paginator
from .models import User, Article
from django.core import serializers
from django.views import View
from datetime import date, timedelta


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
            week_ago = date.today() - timedelta(weeks=4)
            # TODO Change article list load number
            article_list = Article.objects.filter(public_date__gte=week_ago).order_by('-view_number', '-public_date')[
                           :2]
        except Exception:
            return JsonResponse(json.dumps({'success': False}), safe=False)
        return JsonResponse(list(article_list.values()), safe=False)
