# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import psycopg2
from sqlalchemy.orm import sessionmaker
from Tunisianet.models import Products, db_connect, create_products_table
class TunisianetPipeline(object):

    """Livingsocial pipeline for storing scraped items in the database"""
    def __init__(self):
        """
        Initializes database connection and sessionmaker.
        Creates deals table.
        """
        engine = db_connect()
        create_products_table(engine)
        self.Session = sessionmaker(bind=engine)
    def process_item(self, item, spider):
        """Save deals in the database.

        This method is called for every item pipeline component.

        """
        session = self.Session()
        product = Products(**item)

        try:
            session.add(product)
            session.commit()
        except:
            session.rollback()
            raise
        finally:
            session.close()

        return item
