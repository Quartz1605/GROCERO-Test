from django.db import models

# Create your models here.
class Product(models.Model):
    productID = models.IntegerField()
    productName = models.CharField(max_length=100)
    price = models.FloatField()
    imgPath = models.URLField(max_length=150)

    def __str__(self):
        return self.productName