
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from base.serializers import ProductSerializer
from rest_framework.response import Response

#error handler
from rest_framework import status

#models
from base.models import Product, User


#products
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

#one product
@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

#by category
@api_view(['GET'])
def getProductsByCategory(request, category):
    products = Product.objects.all().filter(category=category)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

#upload image
@api_view(['POST'])
def uploadImage(request):
    data = request.data 
    
    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)
    
    product.image = request.FILES.get('image')
    product.save()
    
    return Response('Image uploaded')

#create product
@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user
    
    product = Product.objects.create(
        user = user,
        name = "Sample Name",
        price = 0,
        countInStock = 0,
        category = "Sample Category",
        description = ''
    )
    
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

