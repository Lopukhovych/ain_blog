import sys
from selenium import webdriver
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
import platform
import time

sys.path.append('..')


# from blog.models import User

class TestLoginPage(StaticLiveServerTestCase):
    port = 8000

    def setUp(self):
        if platform.system() == 'Darwin':
            self.browser = webdriver.Chrome('functional_test/chromedriver_mac')
        elif platform.system() == 'Linux':
            self.browser = webdriver.Chrome('functional_test/chromedriver')
        else:
            self.browser = webdriver.Chrome('functional_test/chromedriver.exe')
        # TODO change to self.live_server_url
        self.basic_url = 'http://localhost:3000/'

    def tearDown(self):
        self.browser.close()

    def test_open_home_page(self):
        print('selenium test_open_home_page')

        self.browser.get(self.basic_url)
        main_search_title = self.browser.find_element_by_class_name('nav-logo__img')
        self.assertEquals(main_search_title.get_attribute("alt"), 'Logo')

    def test_open_popular_post_page(self):
        print('selenium test_open_popular_post_page')

        self.browser.get(self.basic_url)
        self.browser.find_element_by_class_name('post-thumb').click()

        login_url = self.basic_url + 'post/1'

        self.assertEquals(
            self.browser.current_url,
            login_url
        )
