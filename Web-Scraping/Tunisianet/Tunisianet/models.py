from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.engine.url import URL
from scrapy.utils.project import get_project_settings
from datetime import datetime

DeclarativeBase = declarative_base()


def db_connect():
    """
    Performs database connection using database settings from settings.py.
    Returns sqlalchemy engine instance
    """
    return create_engine("postgresql://postgres:postgresql@localhost/web_scraping_mediashop")

def create_products_table(engine):
    """"""
    DeclarativeBase.metadata.create_all(engine)
def create_category_table(engine):
    """"""
    DeclarativeBase.metadata.create_all(engine)

class Products(DeclarativeBase):
    """Sqlalchemy deals model"""
    __tablename__ = "products"

    id = Column(Integer, primary_key=True)
    url = Column('url', String)
    image = Column('image', String)
    reference = Column('reference', String)
    name = Column('name', String)
    priceString = Column('priceString', String)
    price = Column('price', String)
    brand = Column('brand', String)
    category = Column('category', String)
    subcategory = Column('subcategory', String)
    timestamp= Column('timestamp', DateTime)
    currency= Column('currency', String)
    country= Column('country', String)
    domaine= Column('domain',String)
    description= Column('description',String)


class Category(DeclarativeBase):
    __tablename__ = "category"

    id = Column(Integer, primary_key=True)
   
    category = Column('name', String)
  
