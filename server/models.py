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

  reviews = db.relationship('Review', back_populates='artist', cascade='all')

  albums = association_proxy('reviews', 'album', creator = lambda al: Review(album = al))

  @validates('name', 'image')
  def validate_name(self, key, value):
    if not value:
      raise ValueError(f"{key} field must be completed.")
    else:
      return value

class Album(db.Model, SerializerMixin):
  __tablename__ = 'albums'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, unique=True)
  year = db.Column(db.Integer, nullable=False)
  song = db.Column(db.String, nullable=False)
  artist_name = db.Column(db.String, nullable=False)

  reviews = db.relationship('Review', back_populates='album', cascade='all')

  artists = association_proxy('reviews', 'artist', creator = lambda ar: Review(artist = ar))

  @validates('name', 'song', 'year')
  def validate_name_year_song(self, key, value):
    if not value:
      raise ValueError(f"{key} field must be completed.")
    else:
      return value

class Review(db.Model, SerializerMixin):
  __tablename__ = 'reviews'

  id = db.Column(db.Integer, primary_key=True)
  rating = db.Column(db.Integer)
  text = db.Column(db.String)

  artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'))
  album_id = db.Column(db.Integer, db.ForeignKey('albums.id'))

  artist = db.relationship('Artist', back_populates='reviews')
  album = db.relationship('Album', back_populates='reviews', cascade='all')

  @validates('rating')
  def validate_rating(self, key, value):
    if not (isinstance(value, int)) and (0 <= value <= 10):
      raise ValueError(f"{key} must be an integer that is between 0 and 10")
    else:
      return value
    
  @validates('artist_id', 'album_id')
  def validate_artist_and_album_id(self, key, value):
    if not (isinstance(value, int)):
      raise ValueError(f"{key} must be an Integer.")
    else:
      return value