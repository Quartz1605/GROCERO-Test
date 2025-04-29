from django.db import models
from auth_app.models import User

# Create your models here.

class Search(models.Model):
  user = models.ForeignKey(User,on_delete=models.CASCADE)
  search = models.CharField(max_length=100)

  def __str__(self):
    return self.search
