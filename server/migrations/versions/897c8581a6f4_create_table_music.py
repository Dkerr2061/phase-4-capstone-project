"""create table music

Revision ID: 897c8581a6f4
Revises: 
Create Date: 2024-06-10 23:13:19.372300

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '897c8581a6f4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('albums',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('year', sa.Integer(), nullable=False),
    sa.Column('song', sa.String(), nullable=False),
    sa.Column('artist_name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('artists',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('image', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('text', sa.String(), nullable=True),
    sa.Column('artist_id', sa.Integer(), nullable=True),
    sa.Column('album_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['album_id'], ['albums.id'], name=op.f('fk_reviews_album_id_albums')),
    sa.ForeignKeyConstraint(['artist_id'], ['artists.id'], name=op.f('fk_reviews_artist_id_artists')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('artists')
    op.drop_table('albums')
    # ### end Alembic commands ###