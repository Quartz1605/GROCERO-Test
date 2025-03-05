from flask import Flask, render_template
import sqlite3
import subprocess
from apscheduler.schedulers.background import BackgroundScheduler

app = Flask(__name__)

def get_db_connection():
    """Establishes and returns a database connection."""
    return sqlite3.connect("products.db", check_same_thread=False)

def update_product_data():
    """Runs the scraper script periodically to update the database."""
    print("🔄 Running the web scraper to update product data...")
    subprocess.run(["python", "scraper.py"])  # Runs scraper.py
    print("✅ Scraper execution completed.")

@app.route('/')
def dashboard():
    """Fetches product data and renders the dashboard."""
    with get_db_connection() as conn:
        cursor = conn.cursor()
        
        cursor.execute("""
            SELECT name, price, category,
                CASE 
                    WHEN last_updated = (SELECT MAX(last_updated) FROM products) THEN 'new'
                    WHEN price > COALESCE((
                        SELECT price FROM products p2 
                        WHERE p2.name = p1.name 
                        ORDER BY last_updated DESC 
                        LIMIT 1 OFFSET 1
                    ), price) THEN 'increase'
                    WHEN price < COALESCE((
                        SELECT price FROM products p2 
                        WHERE p2.name = p1.name 
                        ORDER BY last_updated DESC 
                        LIMIT 1 OFFSET 1
                    ), price) THEN 'decrease'
                    ELSE 'no change'
                END AS status
            FROM products p1
            ORDER BY last_updated DESC
        """)
        
        products = cursor.fetchall()

    return render_template("dashboard.html", products=products)

# **Schedule the scraper to run every 10 minutes**
scheduler = BackgroundScheduler()
scheduler.add_job(update_product_data, 'interval', hours=24)
scheduler.start()
print("⏳ APScheduler is active. Scraper will run every 24 hours.")

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
