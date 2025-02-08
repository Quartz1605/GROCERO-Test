from django.db import models

class signup(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=60)
    email = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username
