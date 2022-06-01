"""
Views for the tradingCard APIs
"""
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse

from core.models import TradingCard
from tradingCard import serializers
from tradingCard.card_gen import TCGCard


class TradingCardViewSet(viewsets.ModelViewSet):
    """View for manage tradingCard APIs."""
    serializer_class = serializers.TradingCardSerializer
    queryset = TradingCard.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

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

    def create(self, request, *args, **kwargs):
        card_data = request.data

        generatedCard = TCGCard(card_data['name'])

        newCard = TradingCard.objects.create(
            creator = request.user,
            owner = request.user,
            name = generatedCard["name"],
            rarity = generatedCard["rarity"],
            stats = generatedCard["stats"],
            specMove = generatedCard["specMove"],
            link = card_data["link"],
            rating = card_data["rating"],
            ratingCount = card_data["ratingCount"],
            isListed = card_data["isListed"],
            )

        newCard.save()

        serializer = serializers.TradingCardSerializer(newCard)

        return Response(serializer.data)

        # def create(self, request, *args, **kwargs):
        # card_data = request.data

        # newCard = TradingCard.objects.create(
        #     creator = card_data["creator"],
        #     owner = card_data["owner"],
        #     name = card_data["name"],
        #     rarity = card_data["rarity"],
        #     stats = card_data["stats"],
        #     specMove = card_data["specMove"],
        #     link = card_data["link"],
        #     rating = card_data["rating"],
        #     ratingCount = card_data["ratingCount"],
        #     isListed = card_data["isListed"],
        #     )

        # newCard.save()

        # serializer = serializers.TradingCardSerializer(newCard)

        # return Response(serializer.data)

    # @action(detail = False)
    # def get_all_cards(self,request):
    #     return self.queryset