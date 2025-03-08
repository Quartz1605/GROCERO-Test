import sqlite3
import time
from playwright.sync_api import sync_playwright

print("🚀 Scraper started...")  
# Connect to SQLite database
conn = sqlite3.connect("products2.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE,
    price TEXT,
    category TEXT,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    img_path TEXT,
    groRates TEXT
)
""")
conn.commit()

def scrape_category(page, category_name):
    """Scrape product details from a given category page."""
    print(f"🔄 Scraping products for category: {category_name}")
    time.sleep(2)
    
    for _ in range(20):  
        page.mouse.wheel(0, 5000)
        time.sleep(2)
    print("✅ Scrolled through category page")

    product_names = page.locator("h5[data-testid='product-card-name']").all_text_contents()
    product_prices = page.locator("h4[data-testid='product-card-price']").all_text_contents()
    print(f"📊 Extracted {len(product_names)} product names and {len(product_prices)} prices")

    if len(product_names) != len(product_prices):
        print(f"⚠️ Mismatch: {len(product_names)} names, {len(product_prices)} prices in {category_name}")

    for name, price in zip(product_names, product_prices):
        cursor.execute("SELECT price, img_path, groRates FROM products WHERE name = ?", (name,))
        existing_product = cursor.fetchone()

        if existing_product:
            existing_price, img_path, groRates = existing_product
            if existing_price != price:
                cursor.execute("""
                    UPDATE products 
                    SET price = ?, last_updated = CURRENT_TIMESTAMP
                    WHERE name = ?
                """, (price, name))
                print(f"🔄 Updated price for {name} from {existing_price} to {price}")
        else:
            cursor.execute("""
                INSERT INTO products (name, price, category, img_path, groRates) 
                VALUES (?, ?, ?, NULL, NULL)
            """, (name, price, category_name))
            print(f"✅ Added new product: {name} at {price}")
    
    conn.commit()
    print(f"✅ Stored {len(product_names)} products from {category_name}")

def scrape_zepto():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        print("🌍 Opening Zepto homepage...")
        page.goto("https://www.zeptonow.com/")  
        page.wait_for_load_state("networkidle")
        print("✅ Zepto homepage loaded")

        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(3)
        print("🐜 Scrolled to footer to load category links")

        category_elements = page.locator("a[data-testid$='-footer-link']").all()  
        categories = [(element.text_content().strip(), element.get_attribute("href")) for element in category_elements if element.get_attribute("href") and element.get_attribute("data-testid") not in ["instagram-footer-link", "facebook-footer-link", "twitter-footer-link","Home-footer-link","Delivery areas-footer-link","Careers-footer-link","Customer Support-footer-link","Press-footer-link","Privacy Policy-footer-link","Terms of Use-footer-link","Responsible Disclosure Policy-footer-link","Mojo - a Zepto Blog-footer-link","linkedin-footer-link"]]
        print(f"📝 Extracted {len(categories)} category links")

        for category_name, category_url in categories:
            full_url = f"https://www.zeptonow.com{category_url}"
            print(f"🔍 Navigating to category: {category_name} -> {full_url}")
            
            page.goto(full_url)
            page.wait_for_load_state("networkidle")
            print(f"✅ Category page loaded: {category_name}")
            scrape_category(page, category_name)

        browser.close()
        print("🛑 Browser closed")

scrape_zepto()
conn.close()
print("✅ Database connection closed")
