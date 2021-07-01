# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import psycopg2
from sqlalchemy.orm import sessionmaker
from Tunisianet.models import products_product, db_connect, create_products_product_table
class TunisianetPipeline(object):

    def __init__(self):
        """
        Initializes database connection and sessionmaker.
        Creates products table.
        """
        engine = db_connect()
        create_products_product_table(engine)
        self.Session = sessionmaker(bind=engine)
    def process_item(self, item, spider):
        """Save products in the database.

        This method is called for every item pipeline component.

        """
        session = self.Session()
        product = products_product(**item)
        
        try:
            session.add(product)
            session.commit()
        except:
            session.rollback()
            raise
        finally:
            session.close()

        return item
