"""
Serializers for recipe APIs
"""
from rest_framework import serializers

from core.models import Recipe
from core.models import User

class UserSerializer(serializers.ModelSerializer):
    """Serializer for users."""

    class Meta:
        model = User
        fields = ['id', 'name', 'email']


class RecipeSerializer(serializers.ModelSerializer):
    """Serializer for recipes."""
    # user = serializers.StringRelatedField(source='user.name')
    # user = serializers.ModelField(User)
    user = UserSerializer(read_only = True)

    class Meta:
        model = Recipe
        fields = ('id', 'user', 'title', 'time_minutes', 'price', 'link')
        read_only_fields = ['id']
