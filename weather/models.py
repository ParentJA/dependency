__author__ = 'jason.a.parent@gmail.com (Jason Parent)'

# Django imports...
from django.db import models


class Weather(models.Model):
    day = models.DateField()
    temperature = models.IntegerField()
