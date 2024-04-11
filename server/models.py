from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db

# Models go here!
class Artist(db.Model, SerializerMixin):
  __tablename__ = 'artists'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False, unique=True)
  image = db.Column(db.String, nullable=False)

# Finish models and then migrate then upgrade then add relationships