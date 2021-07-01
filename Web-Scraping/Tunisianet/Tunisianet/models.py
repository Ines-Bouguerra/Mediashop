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
    return create_engine("postgresql://postgres:postgresql@localhost/mediashop_db")

def create_products_product_table(engine):
    """"""
    DeclarativeBase.metadata.create_all(engine)

class products_product(DeclarativeBase):
    """Sqlalchemy products model"""
    __tablename__ = "products_product"

    id = Column(Integer, primary_key=True)
    url = Column('url', String)
    image = Column('image', String)
    reference = Column('reference', String)
    name = Column('name', String)
    priceString = Column('priceString', String)
    price = Column('price', String)
    subcategory = Column('sub_category', String)
    timestamp= Column('timestamp', DateTime)
    currency= Column('currency', String)
    country= Column('country', String)
    domaine= Column('domaine',String)
    description= Column('description',String)
    discount= Column('discount',String)
    retailer= Column('retailer',String)
    marketplace= Column('marketplace',String)
    category= Column('category_slug',String)
    brand= Column('brand_slug',String)

