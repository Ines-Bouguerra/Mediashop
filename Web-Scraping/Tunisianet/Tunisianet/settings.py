
BOT_NAME = 'Tunisianet'

SPIDER_MODULES = ['Tunisianet.spiders',]
NEWSPIDER_MODULE = 'Tunisianet.spiders'

ITEM_PIPELINES = {
    'Tunisianet.pipelines.TunisianetPipeline': 300,
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
