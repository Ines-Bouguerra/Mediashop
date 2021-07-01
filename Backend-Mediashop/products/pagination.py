from rest_framework.pagination import (
    PageNumberPagination,)


class ProductPageNumberPagination(PageNumberPagination):
    # page_size = 28
    page_query_param='page'
    page_size_query_param = 'limits'
    last_page_strings = ('the_end',)
