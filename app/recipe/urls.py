"""
URL mappings for the recipe app.
"""
from django.urls import (
    path,
    include,
)

from rest_framework.routers import DefaultRouter

from recipe import views


urlpatterns = [
    path('recipes/', views.recipe_list),
    path('recipes/<int:pk>/', views.recipe_detail),
]