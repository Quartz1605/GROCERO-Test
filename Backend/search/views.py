from django.shortcuts import render
from main_app.models import Product
from rest_framework.views import APIView
from django.db.models import Q
from rest_framework.response import Response
from rest_framework import status
from .serializers import SearchSerializer
from .serializers import SearchStoreSerializer

# Create your views here.

class SearchView(APIView):
  
  def get(self,request):



    query = request.GET.get('q','')
    user = request.user.id

    
    

    if query:
      serializer = SearchStoreSerializer(data=[{
      "user" : user,
      "search" : query,
      }],many=True)

      if serializer.is_valid():
        serializer.save()
        
      product = Product.objects.filter(
        Q(name__icontains=query)
      )

      serializer = SearchSerializer(product,many=True)
      return Response(serializer.data,status=status.HTTP_200_OK)
    
    
    else:
      return Response({"message" : "Query object not found"},status=status.HTTP_400_BAD_REQUEST)
    

  

    






    
    
    
    
    
   





