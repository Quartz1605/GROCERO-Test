from rest_framework import generics, status,viewsets
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import User,CartItems
from .serializers import RegisterSerializer, UserSerializer, MyTokenObtainPairSerializer,CartItemSerializer,CartItemDisplaySerializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view


# 🔹 Custom JWT Authentication View (Login)
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        print("🔹 Login Attempt Received:", request.data)

        serializer = self.get_serializer(data=request.data)

        if not serializer.is_valid():
            print("❌ Login Validation Error:", serializer.errors)  # Debugging
            return Response({"error": "Invalid username or password."}, status=status.HTTP_400_BAD_REQUEST)

        response = super().post(request, *args, **kwargs)
        print("✅ Login Successful:")
        return response

# 🔹 User Registration View
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]  # Allows unauthenticated users to register

    def create(self, request, *args, **kwargs):
        print("Received Data:", request.data)  # Debugging line
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            return Response(
                {"message": "User registered successfully!", "user": UserSerializer(user).data},
                status=status.HTTP_201_CREATED
            )

        print("Validation Errors:", serializer.errors)  # Debugging line
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# 🔹 Fetch User Profile (Authenticated Users Only)
class UserDetailView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user  # Returns the logged-in user's details
    

## CartSystem view

class CartItemViewSet(APIView):
    def post(self,request):
        cart_items = request.data

        if isinstance(cart_items,list):
            
            for item in cart_items:
                item["user"] = request.user.id
            
            serializer = CartItemSerializer(data=cart_items,many=True)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
        return Response({"error": "Expected a list of cart items"}, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def cart_list(request):
    items = CartItems.objects.all()
    serializer = CartItemDisplaySerializer(items,many=True)
    
    return Response(serializer.data)