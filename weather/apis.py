__author__ = 'jason.a.parent@gmail.com (Jason Parent)'

# Third-party imports...
from rest_framework.viewsets import ModelViewSet

# Local imports...
from .models import Weather
from .serializers import WeatherSerializer


class WeatherViewSet(ModelViewSet):
    queryset = Weather.objects.all()
    serializer_class = WeatherSerializer
