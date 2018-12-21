from rest_framework import serializers

from .models import List, Item


class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ('id', 'title', 'description', 'is_public', 'slug', 'created_at', 'timer')

class ItemSerializer(serializers.ModelSerializer):
		class Meta:
				model = Item
				fields = ('id', 'title', 'description', 'slug', 'created_at', 'list', 'order')
