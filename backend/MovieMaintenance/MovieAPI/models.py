from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=32)
    description = models.CharField(max_length=256)
    releaseDate = models.DateField()
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.title

class Actor(models.Model):
    name = models.CharField(max_length=32)
    dob = models.DateField()

    def __str__(self):
        return self.name

class Relation(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    actor = models.ForeignKey(Actor, on_delete=models.CASCADE)

    def __str__(self):
        return self.movie.title +  '-' + self.actor.name
