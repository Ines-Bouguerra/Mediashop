from django.test import TestCase

from products.models import *


class TestProductModel(TestCase):

    def setUp(self):
        self.data1 = Product.objects.create(
            name='productTest', reference="refTest")

    def test_product_model_entry(self):

        # Test Product model data insertion/types/field attributes

        data = self.data1
        self.assertTrue(isinstance(data, Product))
        self.assertEquals(str(data), 'productTest')


class TestPosttModel(TestCase):

    def setUp(self):
        self.data1 = Post.objects.create(user_creator_post='602e7e6e505cbdf056f900aa',
                                         post_text="postTest", created_at='2021-02-18T14:49:18.704+00:00')

    def test_post_model_entry(self):

        # Test Post model data insertion/types/field attributes

        data = self.data1
        self.assertEquals(str(data), 'postTest')
