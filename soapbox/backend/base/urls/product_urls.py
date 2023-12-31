
from django.urls import path
from base.views import product_views as views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('', views.getProducts, name='products'),
    path('category/<str:category>/', views.getProductsByCategory, name='product-category'),
    path('create/', views.createProduct, name='product-create'),
    path('<int:pk>/', views.getProduct, name='product'),
    

    path('upload/', views.uploadImage, name='image-upload'),
    path('update/<str:pk>/', views.updateProduct, name='product-update'),
    path('delete/<str:pk>/', views.deleteProduct, name='product-delete'),
    
]