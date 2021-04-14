
from itemadapter import ItemAdapter
from sqlalchemy.orm import sessionmaker
from jumia.models import ProductsJumia, db_connect, create_productsJumia_table


class JumiaPipeline(object):

    def __init__(self):

        engine = db_connect()
        create_productsJumia_table(engine)
        self.Session = sessionmaker(bind=engine)

    def process_item(self, item, spider):

        session = self.Session()
        product = ProductsJumia(**item)

        try:
            session.add(product)
            session.commit()
        except:
            session.rollback()
            raise
        finally:
            session.close()

        return item
