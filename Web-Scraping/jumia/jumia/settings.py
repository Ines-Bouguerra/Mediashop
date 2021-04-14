BOT_NAME = 'jumia'

SPIDER_MODULES = ['jumia.spiders']
NEWSPIDER_MODULE = 'jumia.spiders'
ITEM_PIPELINES = {
    'jumia.pipelines.JumiaPipeline': 300,
}

DATABASE = {
    'drivername': 'postgres',
    'host': 'localhost',
    'port': '5432',
    'username': 'postgres',
    'password': 'postgresql',
    'database': 'web_scraping_mediashop'
}

ROBOTSTXT_OBEY = True
