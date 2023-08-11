from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .products import products
from rest_framework.response import Response
from .serializers import ProductSerializer

from .models import Product

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        
        #products
        #do not leave trailing comma
        '/api/products/', #get all
        '/api/products/create/', #post
        '/api/products/upload/', 
        '/api/products/<id>/reviews/', #reviews of products
        '/api/products/top/',
        '/api/products/delete/<id>', #delete
        '/api/products/<id>', #get one
        '/api/products/update/<id>' #put
    ]
    
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for p in products:
        if p['_id'] == pk:
            product = p
            break
    return Response(product)