import sqlite3
import os
import django
from datetime import datetime

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')  # replace with your actual settings module
django.setup()

from main_app.models import Product  # replace with your actual app name

# Connect to the uploaded SQLite DB (path is important)
conn = sqlite3.connect('products2.db')
cursor = conn.cursor()

cursor.execute("SELECT * FROM products")
rows = cursor.fetchall()

# Clear previous data (optional)
Product.objects.all().delete()

# Import data
for row in rows:
    Product.objects.create(
        groID=row[0],
        name=row[1],
        price=row[2],
        category=row[3],
        last_updated=row[4],  # now works properly
        img_path=row[5],
        groRates=row[6]
    )

conn.close()
print("✅ Product data imported successfully!")
