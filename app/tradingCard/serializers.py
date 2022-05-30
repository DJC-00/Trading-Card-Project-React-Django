"""
Serializers for TradingCard APIs
"""
from rest_framework import serializers

from core.models import TradingCard
from core.models import User

class UserSerializer(serializers.ModelSerializer):
    """Serializer for users."""

    class Meta:
        model = User
        fields = ['id', 'name', 'email']

class TradingCardSerializer(serializers.ModelSerializer):
    """Serializer for TradingCards."""
    creator = UserSerializer(read_only = True)
    owner = UserSerializer(read_only = True)
    class Meta:
        model = TradingCard
        fields = ['id', 'creator', 'owner', 'name', 'rarity', 'stats', 'specMove', 'link', 'rating', 'ratingCount', 'isListed']
        read_only_fields = ['id']