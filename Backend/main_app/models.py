from django.db import models

class Product(models.Model):
    groID = models.IntegerField(null=True, blank=True)
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=20)
    category = models.CharField(max_length=100)
    last_updated = models.DateTimeField(null=True) 
    img_path = models.TextField(null=True, blank=True)
    groRates = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name