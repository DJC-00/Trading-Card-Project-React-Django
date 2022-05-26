"""
Serializers for TradingCard APIs
"""
from rest_framework import serializers

from core.models import TradingCard


class TradingCardSerializer(serializers.ModelSerializer):
    """Serializer for TradingCards."""

    class Meta:
        model = TradingCard
        fields = ['id', 'creator', 'owner', 'name', 'rarity', 'stats', 'specMove', 'link']
        read_only_fields = ['id']