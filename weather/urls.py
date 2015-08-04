__author__ = 'jason.a.parent@gmail.com (Jason Parent)'

# Django imports...
from django.conf.urls import url

# Local imports...
from .apis import WeatherViewSet

urlpatterns = [
    url(r'^$', WeatherViewSet.as_view({
        'get': 'list',
        'post': 'create'
    })),
    url(r'^(?P<pk>\d+)/$', WeatherViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),
]
