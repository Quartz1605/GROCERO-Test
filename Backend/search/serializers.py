from main_app.models import Product
from rest_framework import serializers

class SearchSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = fields = ['groID','name','price','groRates','img_path']