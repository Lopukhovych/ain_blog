from django.test import SimpleTestCase
from django.urls import reverse, resolve
from blog.views import ArticleList, ArticleItem, PopularList, GroupList, AdvertisementList


# Create your tests here.

class TestUrls(SimpleTestCase):

    def test_url_article_list(self):
        url = reverse('article_list')
        self.assertEquals(resolve(url).func.view_class, ArticleList)

    def test_url_popular_list(self):
        url = reverse('popular_list')
        self.assertEquals(resolve(url).func.view_class, PopularList)

    def test_url_article_item(self):
        url = reverse('article_item', kwargs={'article_id': 1})
        self.assertEquals(resolve(url).func.view_class, ArticleItem)
        self.assertEquals(resolve(url).kwargs['article_id'], 1)

    def test_url_group_list(self):
        url = reverse('group_list')
        self.assertEquals(resolve(url).func.view_class, GroupList)

    def test_url_advertisement_lists(self):
        url = reverse('advertisement_list')
        self.assertEquals(resolve(url).func.view_class, AdvertisementList)
