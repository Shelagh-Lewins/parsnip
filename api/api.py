from rest_framework import viewsets, permissions

from .models import List
from .serializers import ListSerializer


class ListViewSet(viewsets.ModelViewSet):
    queryset = List.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = ListSerializer
