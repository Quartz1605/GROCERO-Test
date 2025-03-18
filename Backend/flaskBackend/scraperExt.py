import sqlite3
import time
from playwright.sync_api import sync_playwright

# Connect to SQLite database (DO NOT DELETE OLD DATA)
conn = sqlite3.connect("products2.db")
cursor = conn.cursor()

# Ensure table exists
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

def extract_category_links(page):
    """Extract category links below the 'New In Store' header."""
    new_in_store_header = page.locator("xpath=//h4[contains(text(), 'New In Store')]")

    if new_in_store_header.count() == 0:
        print("❌ 'New In Store' header not found.")
        return []
    
    print("✅ 'New In Store' header found.")

    # Get the parent container
    parent_container = new_in_store_header.locator("xpath=ancestor::div[1]")  # Adjust if needed

    # Find all <a> tags inside this container
    category_links = parent_container.locator("xpath=.//a").all()

    extracted_links = []
    for link in category_links:
        href = link.get_attribute("href")
        label = link.get_attribute("aria-label") or "Unknown Category"
        if href:
            extracted_links.append((label, f"https://www.zeptonow.com{href}"))
    
    print(f"✅ Extracted {len(extracted_links)} category links.")
    return extracted_links

def scrape_category(page, category_name, category_url):
    """Scrape product details from a category page."""
    print(f"🔍 Navigating to category: {category_name} -> {category_url}")
    page.goto(category_url)
    page.wait_for_load_state("networkidle")

    time.sleep(2)

    # Scroll down to load more products
    for _ in range(10):  
        page.mouse.wheel(0, 3000)
        time.sleep(2)

    print(f"✅ Extracted products for category: {category_name}")

    # Extract product names & prices
    product_names = page.locator("h5[data-testid='product-card-name']").all_text_contents()
    product_prices = page.locator("h4[data-testid='product-card-price']").all_text_contents()
    print(f"📊 Extracted {len(product_names)} product names and {len(product_prices)} prices")

    print(f"📊 Found {len(product_names)} product names and {len(product_prices)} prices.")

    if len(product_names) != len(product_prices):
        print(f"⚠️ Warning: Mismatch in product count for {category_name}")

    # Insert or update database
    for name, price in zip(product_names, product_prices):
        cursor.execute("SELECT price FROM products WHERE name = ?", (name,))
        existing_product = cursor.fetchone()

        if existing_product:
            existing_price = existing_product[0]
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

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)  # Set to True for headless mode
        page = browser.new_page()
        
        print("🌍 Opening Zepto homepage...")
        page.goto("https://www.zeptonow.com/")
        page.wait_for_load_state("networkidle")

        category_links = extract_category_links(page)
        if not category_links:
            print("❌ No category links found. Exiting...")
            return

        for category_name, category_url in category_links:
            scrape_category(page, category_name, category_url)

        browser.close()

    conn.close()
    print("✅ Database connection closed")

main()
