from django.contrib import admin
from .models import User, Signup,CartItems


# Register your models here.
admin.site.register(User)
admin.site.register(Signup)
admin.site.register(CartItems)

