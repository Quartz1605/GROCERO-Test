from django.db import models

# Create your models here.


class Products(models.Model):
    name = models.TextField(primary_key=True,unique=True, blank=True)
    price = models.TextField(blank=True, null=True)
    category = models.TextField(blank=True, null=True)
    last_updated = models.TextField(blank=True, null=True)  
    img_path = models.TextField(blank=True, null=True)
    grorates = models.TextField(db_column='groRates', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'products'

