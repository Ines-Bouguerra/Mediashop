import elasticsearch
from elasticsearch_dsl import Search
import pathlib


ELASTIC_HOST = 'http://localhost:9200/'
client = elasticsearch.Elasticsearch(hosts=[ELASTIC_HOST])
INDEXES = ['mediashop_products']
fields = ['name', 'reference', 'category_slug', 'brand_slug'
          'description',  'sub_category', 'priceString', 'image', 'discount']


def lookup(query, index=INDEXES, fields=fields):
    if not query:
        return
    results = Search(index=index).using(client).query(
        'multi_match', fields=fields, fuzziness='AUTO', query=query)
    q_results = []
    for result in results:
        print(result.name)
        print(result.image)
        data = {
            'reference': result.reference,
            'category_slug': result.category_slug,
            'sub_category': result.sub_category,
            'name': result.name,
            'price': result.priceString,
            'brand_slug': result.brand_slug,
            'description': result.description,
            'image': result.image,
            'discount': result.discount,
        }
        q_results.append(data)
    return q_results
