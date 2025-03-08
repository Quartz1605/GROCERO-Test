from flask import Flask, jsonify,request
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_products(category=None):
    conn = sqlite3.connect("products2.db")
    cursor = conn.cursor()

    if category:
        cursor.execute("SELECT name, price,img_path,groRates FROM products WHERE category = ? ORDER BY last_updated DESC", (category,))
    else:
        cursor.execute("SELECT name, price,img_path,groRates FROM products ORDER BY last_updated DESC")
    
    products = cursor.fetchall()
    
    formatted_products = []
    for name, price,img_path,groRates in products:
        cursor.execute("SELECT price FROM products WHERE name = ? ORDER BY last_updated DESC LIMIT 2", (name,))
        price_history = cursor.fetchall()

        if len(price_history) >= 2:
            last_price, prev_price = price_history[0][0], price_history[1][0]
            status = "increase" if last_price > prev_price else "decrease" if last_price < prev_price else None
        else:
            status = None

        formatted_products.append([name, price, status,img_path,groRates])

    conn.close()
    return formatted_products

@app.route("/api/products", methods=["GET"])
def products_api():
  category = request.args.get("category")
  products = get_products(category)
  return jsonify(products)


if __name__ == "__main__":
    app.run(debug=True,port=5000)
