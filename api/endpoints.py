from django.conf.urls import include, url
from rest_framework import routers

from .api import ListViewSet

router = routers.DefaultRouter()
router.register('lists', ListViewSet)

urlpatterns = [
    url("^", include(router.urls)),
]
