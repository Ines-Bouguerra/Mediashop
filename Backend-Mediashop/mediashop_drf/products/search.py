import elasticsearch
from elasticsearch_dsl import Search
import pathlib


ELASTIC_HOST = 'http://localhost:9200/'
client = elasticsearch.Elasticsearch(hosts=[ELASTIC_HOST])
INDEXES = ['mediashop_products']
fields = ['name', 'reference', 'short_description',
          "description",  'category', "sub_category", "brand", "priceString"]


def lookup(query, index=INDEXES, fields=fields):
    if not query:
        return
    results = Search(index=index).using(client).query(
        "multi_match", fields=fields, fuzziness="AUTO", query=query)
    q_results = []
    for result in results:
        print(result.name)
        print(result.reference)
        data = {
            "reference": result.reference,
            "category": result.category,
            "sub_category": result.sub_category,
            "name": result.name,
            "price": result.priceString,
            "brand": result.brand,
            "short_description": result.short_description,
            "description": result.description
        }
        q_results.append(data)
    return q_results
