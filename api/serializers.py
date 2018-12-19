from rest_framework import serializers

from .models import List


class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ('id', 'title', 'description', 'is_public', 'slug', 'created_at', 'timer')
