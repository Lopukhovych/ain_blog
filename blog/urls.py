from django.urls import path

from . import views

urlpatterns = [
    path('article_list/', views.ArticleList.as_view(), name='article_list'),
    path('popular_list/', views.PopularList.as_view(), name='popular_list'),
    path('article/', views.ArticleItem.as_view(), name='article'),
]
