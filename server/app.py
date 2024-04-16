#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Artist, Album, Review


# Views go here!

class AllArtist(Resource):

    def get(self):
        artists = Artist.query.all()
        body =[artist.to_dict(only=('id', 'name', 'image')) for artist in artists]
        return make_response(body, 200)
    
    def post(self):
        try:
            new_artist = Artist(name=request.json.get('name'), image=request.json.get('image'))
            db.session.add(new_artist)
            db.session.commit()
            body = new_artist.to_dict(only=('id', 'name', 'image'))
            return make_response(body, 201)
        except:
            body = { "error": "Artist's name must be unique and both name and image fields must be completed."}
            return make_response(body, 400)

api.add_resource(AllArtist, '/artists')

class ArtistByID(Resource):

    def get(self, id):
        artist = db.session.get(Artist, id)
        if artist:
            body = artist.to_dict(rules=('-reviews.artist', '-reviews.album'))

            body['albums'] = [album.to_dict(only=('id', 'name', 'year', 'song')) for album in artist.albums]

            return make_response(body, 200)
        else:
            body = {"error": f"Artist {id} was not found."}
            return make_response(body, 404)


    def delete(self, id):
        artist = db.session.get(Artist, id)
        if artist:
            db.session.delete(artist)
            db.session.commit()
            body = {}
            return make_response(body, 204)
        else:
            body = {"error": f"Artist {id} was not found."}
            return make_response(body, 404)

api.add_resource(ArtistByID, '/artists/<int:id>')

class AllAlbums(Resource):

    def get(self):
        albums = Album.query.all()
        body = [album.to_dict(only=('id', 'name', 'year', 'song', 'artist_name')) for album in albums]
        return make_response(body, 200)
    
    def post(self):
        try:
            new_album = Album(name=request.json.get('name'), year=request.json.get('year'), song=request.json.get('song'), artist_name=request.json.get('artist_name'))
            db.session.add(new_album)
            db.session.commit()
            body = new_album.to_dict(only=('id', 'name', 'year', 'song', 'artist_name'))
            return make_response(body, 201)
        except:
            body = {"error": "Could not create new album."}
            return make_response(body, 400)

api.add_resource(AllAlbums, '/albums')

class AlbumByID(Resource):

    def get(self, id):
        album = db.session.get(Album, id)
        if album:
            try:
                body = album.to_dict(rules=('-reviews.artist', '-reviews.album'))

                body['artists'] = [artist.to_dict(only=('id', 'name')) for artist in album.artists]
                return make_response(body, 200)
            except:
                body = {"error": f"Album {id} was not found"}
                return make_response(body, 404)
        else:
            body = { "error": f"Album {id} was not found."}
            return make_response(body, 404)
        

    def patch(self, id):
        album = db.session.get(Album, id)
        if album:
            try:
                for attr in request.json:
                    setattr(album, attr, request.json[attr])
                db.session.commit()
                body = album.to_dict(only=('id', 'name', 'year', 'song', 'artist_name'))
                return make_response(body, 200)
            except:
                body = {"error": "Album could not be updated."}
                return make_response(body, 404)
        else:
            body = {"error": f"Album {id} not found."}
            return make_response(body, 404)
        
    def delete(self, id):
        album = db.session.get(Album, id)
        if album:
            try:
                db.session.delete(album)
                db.session.commit()
                body = {}
                return make_response(body, 204)
            except:
                body = {"error": f"Album {id} could not be deleted."}
                return make_response(body, 400)
        else:
            body = {"error": f"Album {id} not found."}
            return make_response(body, 404)
        

api.add_resource(AlbumByID, '/albums/<int:id>')

class AllReviews(Resource):

    def get(self):
        reviews = Review.query.all()
        body = [review.to_dict(rules=('-artist.reviews', '-album.reviews')) for review in reviews]
        return make_response(body, 200)
    
    def post(self):
        try:
            new_review = Review(rating=request.json.get('rating'), text=request.json.get('text'), artist_id=request.json.get('artist_id'), album_id=request.json.get('album_id'))
            db.session.add(new_review)
            db.session.commit()
            body = new_review.to_dict(rules=('-artist.reviews', '-album.reviews'))
            return make_response(body, 201)
        except:
            body = {"error": "Review could not be processed right now."}
            return make_response(body, 400)

api.add_resource(AllReviews, '/reviews')

class ReviewsByID(Resource):

    def get(self, id):
        review = db.session.get(Review, id)
        if review:
            body = review.to_dict(rules=('-artist.reviews', '-album.reviews'))
            return make_response(body, 200)
        else:
            body = {"error": f"Review {id} was not found"}
            return make_response(body, 404)
        
    def patch(self, id):
        review = db.session.get(Review, id)
        if review:
            try:
                for attr in request.json:
                    setattr(review, attr, request.json[attr])
                db.session.commit()
                body = review.to_dict(rules=('-artist.reviews', '-album.reviews'))
                return make_response(body, 200)
            except:
                body = {"error": "Review could not be updated."}
                return make_response(body, 400)
        else:
            body = {"error": f"Review {id} could not be found."}
            return make_response(body, 404)
        
    def delete(self, id):
        review = db.session.get(Review, id)
        if review:
            try:
                db.session.delete(review)
                db.session.commit()
                body = {}
                return make_response(body, 204)
            except:
                body = {"error": f"Review {id} could not be deleted."}
                return make_response(body, 400)
        else:
            body = {"error": f"Review {id} could not be found"}
            return make_response(body, 404)

api.add_resource(ReviewsByID, '/reviews/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

