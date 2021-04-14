from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.engine.url import URL
from scrapy.utils.project import get_project_settings

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


class Products(DeclarativeBase):
    """Sqlalchemy deals model"""
    __tablename__ = "products"

    id = Column(Integer, primary_key=True)
    reference = Column('reference', String)
    title = Column('title', String)
    price = Column('price', String)
    brand = Column('brand', String)
