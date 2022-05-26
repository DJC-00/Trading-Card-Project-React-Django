"""
URL mappings for the tradingCard app.
"""
from django.urls import (
    path,
    include,
)

from rest_framework.routers import DefaultRouter

from tradingCard import views


router = DefaultRouter()
router.register('tradingCards', views.TradingCardViewSet)

app_name = 'tradingCard'

urlpatterns = [
    path('', include(router.urls)),
]