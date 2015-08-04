__author__ = 'jason.a.parent@gmail.com (Jason Parent)'

# Django imports...
from django.contrib import admin

# Local imports...
from .models import Weather


@admin.register(Weather)
class WeatherAdmin(admin.ModelAdmin):
    pass
