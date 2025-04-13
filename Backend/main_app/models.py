from django.db import models

class Product(models.Model):
    prodID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=20)
    category = models.CharField(max_length=100)
    last_updated = models.DateTimeField(null=True) 
    image_path = models.TextField(db_column='img_path', null=True, blank=True)
    groRates = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name