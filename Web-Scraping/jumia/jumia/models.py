from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

DeclarativeBase = declarative_base()


def db_connect():

    return create_engine("postgresql://postgres:postgresql@localhost/web_scraping_mediashop")


def create_productsJumia_table(engine):

    DeclarativeBase.metadata.create_all(engine)


class ProductsJumia(DeclarativeBase):

    __tablename__ = "productsJumia"

    id = Column(Integer, primary_key=True)
    title = Column('title', String)
    price = Column('price', String)
    oldPrice = Column('oldPrice', String)
    promotion = Column('promotion', String)
    rating = Column('rating', String)
