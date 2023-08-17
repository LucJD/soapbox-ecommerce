
from django.urls import path
from base.views import product_views as views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('', views.getProducts, name='products'),
    path('category/<str:category>/', views.getProductsByCategory, name='product-category'),
    path('<str:pk>/', views.getProduct, name='product'),

    path('upload/', views.uploadImage, name='image-upload'),

]