from main_app.models import Product
from rest_framework import serializers
from .models import Search

class SearchSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = ['groID','name','price','groRates','img_path']


class SearchStoreSerializer(serializers.ModelSerializer):
  class Meta:
    model = Search
    fields = ["user","search"]