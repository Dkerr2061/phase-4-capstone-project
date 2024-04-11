#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Artist

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        Artist.query.delete()

        print("Starting seed...")
        # Seed code goes here!
        # artist1 = Artist(name='Korn', image='image.jpg')
