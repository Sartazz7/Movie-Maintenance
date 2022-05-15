from rest_framework import serializers
from .models import Movie, Actor, Relation

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ['id', 'title', 'description', 'releaseDate', 'votes']

class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = ['id', 'name', 'dob']

class RelationSerializer(serializers.ModelSerializer):
    movieId = serializers.IntegerField(source='movie.id')
    actorId = serializers.IntegerField(source='actor.id')

    class Meta:
        model = Relation
        fields = ['id', 'movieId', 'actorId']
