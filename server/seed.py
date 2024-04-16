#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc


# Local imports
from app import app
from models import db, Artist, Album, Review

if __name__ == '__main__':

    with app.app_context():
        Artist.query.delete()
        Album.query.delete()
        Review.query.delete()

        print("Starting seed...")
        # Seed code goes here!
        artist1 = Artist(name="Tool", image="https://64.media.tumblr.com/c4addd730bd958a9cbaab38af1e5c5bd/tumblr_p1z5ev7Ygs1tg2tfco2_500.gifv")
        artist2 = Artist(name="Pink Floyd", image="https://i.pinimg.com/originals/a6/38/c3/a638c3c630901277f2f4cd1ddd30494a.gif")
        artist3 = Artist(name="Flume", image="https://f4.bcbits.com/img/a1463176121_65")
        artist4 = Artist(name="Soda Stero", image="https://lastfm.freetls.fastly.net/i/u/ar0/5d3665e5cc53199c3289920cd1d8ff49.jpg")
        artist5 = Artist(name="Halsey", image="https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png")
        artist6 = Artist(name="The Pillows", image="https://i.imgur.com/tJPlh.gif")
        artist7 = Artist(name="Yoko Kanno", image="https://g.redd.it/ti9m3b3gdqw11.gif?fm=mp4&mp4-fragmented=false&s=bf24815b301b5179f3ff78dfffa1c1b4")
        artist8 = Artist(name="Ice Cube", image="https://static.independent.co.uk/2023/08/04/11/ice-cube.jpg?width=1200&height=630&fit=crop")
        artist9 = Artist(name="Dr. Dre", image="https://media.npr.org/assets/img/2015/08/07/dr.-dre.-interscope_wide-74d3f919fc48818e44f52b28b1b54707df04d044-s1400-c100.jpg")
        artist10 = Artist(name="Primus", image="https://images.sk-static.com/images/media/profile_images/artists/385368/huge_avatar")
        artist11 = Artist(name="Residente", image="https://upload.wikimedia.org/wikipedia/commons/c/c8/Rene_Perez_Residente_2.jpg")
        artist12 = Artist(name="Rage Against The Machine", image="https://media4.giphy.com/media/fSvYIfuezN7aDElL44/200w.gif?cid=6c09b952qyjby8w1v2rr1uhmczvesfppe67y4f55906f1ic6&ep=v1_gifs_search&rid=200w.gif&ct=g")

        album1 = Album(name="Lateralus", year=2001, song="Schism", artist_name="Tool")
        album2 = Album(name="Dark Side of the Moon", year=1973, song="Time", artist_name="Pink Floyd")
        album3 = Album(name="Skin", year=2016, song="Say it", artist_name="Flume")
        album4 = Album(name="Obras Cumbres", year=2001, song="De musica ligera", artist_name="Soda Stereo")
        album5 = Album(name="Badlands", year=2015, song="Gasoline", artist_name="Halsey")
        album6 = Album(name="FLCL", year=2003, song="Hybrid Rainbow", artist_name="The Pillows")
        album7 = Album(name="Stand Alone Complex", year=2011, song="Inner Universe", artist_name="Yoko Kanno")
        album8 = Album(name="The Predator", year=1992, song="It was a good day", artist_name="Ice Cube")
        album9 = Album(name="2001", year=1999, song="Still Dre", artist_name="Dr. Dre")
        album10 = Album(name="They can't all be Zingers", year=2006, song="Blue collar tweekers", artist_name="Primus")
        album11 = Album(name="Bajo y Bateria", year=2023, song="Bajo y Bateria", artist_name="Residente")
        album12 = Album(name="Battle of Los Angeles", year=1999, song="Guerrilla Radio", artist_name="Rage Against The Machine")

        review1 = Review(rating=10, text="A true masterpiece!", artist_id=1, album_id=1)
        review2 = Review(rating=5, text="Better the first time around...", artist_id=5, album_id=5)
        review3 = Review(rating=8, text="Amazing vocals!", artist_id=7, album_id=7)
        review4 = Review(rating=10, text="El mejor concierto que yo he visto!", artist_id=4, album_id=4)
        review5 = Review(rating=6, text="Good for background noise.", artist_id=3, album_id=3)
        review6 = Review(rating=9, text="Scary relevant today.", artist_id=12, album_id=12)

        db.session.add_all([artist1, artist2, artist3, artist4, artist5, artist6, artist7, artist8, artist9, artist10, artist11, artist12])
        db.session.add_all([album1, album2, album3, album4, album5, album6, album7, album8, album9, album10, album11, album12])
        db.session.add_all([review1, review2, review3, review4, review5, review6])

        db.session.commit()

        print("🌱 Artists, Albums, and Reviews successfully seeded! 🌱")
        
