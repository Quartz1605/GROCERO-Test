from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Product

# Create your views here.
def homepage(request):
    return HttpResponse('Home page..')

def getProductDetails(request, pk):
    myProduct = Product.objects.get(productID = pk)
    data = {
        "productName": myProduct.productName,
        "price": myProduct.price,
        "imgPath": myProduct.imgPath
    }
    return JsonResponse(data)