__author__ = 'jason.a.parent@gmail.com (Jason Parent)'

# Django imports...
from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import TemplateView

admin.autodiscover()

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^api/v1/weather/', include('weather.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
