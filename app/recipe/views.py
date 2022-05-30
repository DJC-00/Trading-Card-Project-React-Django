"""
Views for the recipe APIs
"""
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from core.models import Recipe
from recipe import serializers


@csrf_exempt
def recipe_list(request):
    """
    List all code recipes, or create a new recipe.
    """
    if request.method == 'GET':
        recipes = Recipe.objects.all()
        serializer = serializers.RecipeSerializer(recipes, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = serializers.RecipeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def recipe_detail(request, pk):
    """
    Retrieve, update or delete a code recipe.
    """
    try:
        recipe = Recipe.objects.get(pk=pk)
    except Recipe.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = serializers.RecipeSerializer(recipe)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = serializers.RecipeSerializer(recipe, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        recipe.delete()
        return HttpResponse(status=204)