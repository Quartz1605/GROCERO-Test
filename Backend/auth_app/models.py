from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=20)

    USERNAME_FIELD = 'username'    # Username
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.name
    
    

class Signup(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.name

    
class CartItems(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    name  = models.CharField(max_length=200)
    price = models.CharField(max_length=20)
    
    groRates = models.CharField(max_length=20)
    img_path = models.TextField()
    quantity = models.PositiveIntegerField(default=1)


    def __str__(self):
        return f"{self.user.username} - Product name {self.name} x{self.quantity}"
