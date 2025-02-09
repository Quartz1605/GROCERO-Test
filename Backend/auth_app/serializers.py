from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User
from django.contrib.auth.password_validation import validate_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'phone']    

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token =  super().get_token(user)

        token['username'] = user.username
        token['email'] = user.email
        token['name'] = user.name
        token['phone'] = user.phone

        return token

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only = True, required= True, validators = [validate_password]
    )
    class Meta:
        model = User
        fields = ['username', 'email', 'name', 'phone', 'password'] 

    def create(self, validated_data ):
        user = User.objects.create(
            username = validated_data['username'],
            email = validated_data['email'],     
            phone = validated_data['phone'],
            name = validated_data['name'],         

        )   
        user.set_password(validated_data['password'])
        user.save()

        return user
    