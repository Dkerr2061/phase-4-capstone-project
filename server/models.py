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

class Album(db.Model, SerializerMixin):
  __tablename__ = 'albums'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, unique=True)
  year = db.Column(db.Integer, nullable=False)
  song = db.Column(db.String, nullable=False)

class Review(db.Model, SerializerMixin):
  __tablename__ = 'reviews'

  id = db.Column(db.Integer, primary_key=True)
  rating = db.Column(db.Integer)
  text = db.Column(db.String)

  artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'))
  album_id = db.Column(db.Integer, db.ForeignKey('albums.id'))