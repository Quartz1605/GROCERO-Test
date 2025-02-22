from django.urls import path
from .views import homepage, getProductDetails

urlpatterns = [
    path('', homepage),
    path('product/<int:pk>/', getProductDetails)
]