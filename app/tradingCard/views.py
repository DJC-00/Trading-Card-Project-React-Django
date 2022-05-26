"""
Views for the tradingCard APIs
"""
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response

from core.models import TradingCard
from tradingCard import serializers


class TradingCardViewSet(viewsets.ModelViewSet):
    """View for manage tradingCard APIs."""
    serializer_class = serializers.TradingCardSerializer
    queryset = TradingCard.objects.all()
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    def get_user_cards(self):
        """Retrieve tradingCards for authenticated user."""
        return self.queryset.order_by('-id')

    # @action(detail = False)
    # def get_all_cards(self,request):
    #     allCards = TradingCard.objects.all()
    #     serializer = self.get_serializer(allCards, many=True)
    #     return Response(serializer.data)

    @action(detail = True)
    def get_my_cards(self, request, pk):
        myCards = TradingCard.objects.all().filter(owner = pk)
        serializer = self.get_serializer(myCards, many=True)
        return Response(serializer.data)

    # @action(detail = False)
    # def get_all_cards(self,request):
    #     return self.queryset