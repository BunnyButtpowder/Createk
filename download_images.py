#!/usr/bin/env python3
"""
Download images from Createk product Excel file and organize into folders.
Reads "Danh sách sản phẩm (Nhóm to)" and "Danh sách SP (Chi tiết)" sheets.
Downloads images from URLs found in "Mã SP chi tiết" sheet.
"""

import pandas as pd
import requests
import os
import json
import sys
import re
import io
from pathlib import Path
from urllib.parse import urlparse, unquote
from typing import Dict, List, Any

# Set UTF-8 encoding for stdout
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Configuration
EXCEL_FILE = 'public/2026 _ Danh sách sản phẩm Createk.xlsx'
OUTPUT_DIR = 'public/products'
JSON_FILE = 'public/products/products.json'

# Headers for requests
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def sanitize_filename(filename: str) -> str:
    """Remove or replace characters that are not safe for filenames."""
    # Replace problematic characters
    filename = re.sub(r'[<>:"/\\|?*]', '-', filename)
    # Remove leading/trailing spaces and dots
    filename = filename.strip('. ')
    # Limit length
    if len(filename) > 200:
        filename = filename[:200]
    return filename or 'unnamed'

def download_image(url: str, output_path: Path) -> bool:
    """Download an image from URL to specified path."""
    try:
        response = requests.get(url, headers=HEADERS, timeout=30)
        response.raise_for_status()

        # Create parent directories if they don't exist
        output_path.parent.mkdir(parents=True, exist_ok=True)

        # Save the image
        with open(output_path, 'wb') as f:
            f.write(response.content)

        print(f"  ✓ Downloaded: {output_path.name}")
        return True

    except Exception as e:
        print(f"  ✗ Failed to download {url}: {e}")
        return False

def get_file_extension_from_url(url: str) -> str:
    """Extract file extension from URL."""
    path = urlparse(url).path
    ext = os.path.splitext(path)[1].lower()
    if ext in ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp']:
        return ext
    return '.jpg'  # Default to jpg if unknown

def read_group_sheet() -> pd.DataFrame:
    """Read the 'Danh sách sản phẩm (Nhóm to)' sheet."""
    print("Reading 'Danh sách sản phẩm (Nhóm to)' sheet...")
    df = pd.read_excel(EXCEL_FILE, sheet_name="Danh sách sản phẩm (Nhóm to)")

    # The first row contains headers
    df.columns = df.iloc[0]
    df = df.drop(0).reset_index(drop=True)

    # Clean column names
    df.columns = df.columns.str.strip()

    return df

def read_detail_sheet() -> pd.DataFrame:
    """Read the 'Danh sách SP (Chi tiết)' sheet."""
    print("Reading 'Danh sách SP (Chi tiết)' sheet...")
    df = pd.read_excel(EXCEL_FILE, sheet_name="Danh sách SP (Chi tiết)")

    # The first row contains headers
    df.columns = df.iloc[0]
    df = df.drop(0).reset_index(drop=True)

    # Clean column names
    df.columns = df.columns.str.strip()

    return df

def read_image_url_sheet() -> pd.DataFrame:
    """Read the 'Mã SP chi tiết' sheet for image URLs."""
    print("Reading 'Mã SP chi tiết' sheet for image URLs...")
    df = pd.read_excel(EXCEL_FILE, sheet_name="Mã SP chi tiết")

    # The first row contains headers
    df.columns = df.iloc[0]
    df = df.drop(0).reset_index(drop=True)

    # Clean column names
    df.columns = df.columns.str.strip()

    return df

def main():
    """Main function to process the Excel file and download images."""
    print("="*60)
    print("Createk Product Image Downloader")
    print("="*60)

    # Create output directory
    output_dir = Path(OUTPUT_DIR)
    output_dir.mkdir(parents=True, exist_ok=True)

    # Read all sheets
    df_groups = read_group_sheet()
    df_details = read_detail_sheet()
    df_urls = read_image_url_sheet()

    print(f"\nLoaded:")
    print(f"  - {len(df_groups)} product groups")
    print(f"  - {len(df_details)} detailed products")
    print(f"  - {len(df_urls)} products with URLs")

    # Prepare output data structure
    products_data = {
        "categories": [],
        "products": []
    }

    # Process product groups (categories)
    print(f"\nProcessing product groups...")

    # Get unique categories from "Bộ phận" column
    categories = df_groups['Bộ phận'].dropna().unique().tolist()

    for category_name in categories:
        if pd.notna(category_name) and str(category_name).strip():
            category_data = {
                "name": str(category_name).strip(),
                "slug": sanitize_filename(str(category_name).strip()).lower().replace(' ', '-'),
                "groups": []
            }

            # Get groups within this category
            category_groups = df_groups[df_groups['Bộ phận'] == category_name]
            unique_groups = category_groups['TÊN NHÓM'].dropna().unique().tolist()

            for group_name in unique_groups:
                if pd.notna(group_name) and str(group_name).strip():
                    group_data = {
                        "name": str(group_name).strip(),
                        "slug": sanitize_filename(str(group_name).strip()).lower().replace(' ', '-'),
                        "image": None,  # Will be set if image found
                        "products": []
                    }

                    # Check for image filename in this group
                    group_row = category_groups[category_groups['TÊN NHÓM'] == group_name].iloc[0]
                    if pd.notna(group_row.get('Link ảnh')) and str(group_row['Link ảnh']).strip():
                        image_filename = str(group_row['Link ảnh']).strip()
                        # Check if it's a filename or a URL
                        if not image_filename.startswith('http'):
                            # It's just a filename, we'll need to handle this separately
                            group_data["image_filename"] = image_filename

                    category_data["groups"].append(group_data)

            if category_data["groups"]:  # Only add if has groups
                products_data["categories"].append(category_data)

    # Process detailed products with URLs
    print(f"\nProcessing products with image URLs...")

    # Create a mapping from product code to URL
    url_mapping = {}
    for _, row in df_urls.iterrows():
        product_code = str(row.get('Mã AT', '')).strip() if pd.notna(row.get('Mã AT')) else ''
        image_url = str(row.get('Link ảnh', '')).strip() if pd.notna(row.get('Link ảnh')) else ''

        if product_code and image_url.startswith('http'):
            url_mapping[product_code] = image_url

    print(f"  Found {len(url_mapping)} image URLs")
    print(f"  Sample codes: {list(url_mapping.keys())[:5]}")

    # Process detailed products
    downloaded_count = 0
    failed_count = 0

    # Debug: show first few rows of detail sheet
    print(f"\nDebug: First 3 rows of detail sheet:")
    for idx, row in df_details.head(3).iterrows():
        print(f"  Row {idx}: {dict(row)}")

    print(f"\nDebug: Available columns in detail sheet: {list(df_details.columns)}")

    for _, row in df_details.iterrows():
        product_code = str(row.get('Mã AT', '')).strip() if pd.notna(row.get('Mã AT')) else ''

        if not product_code:
            continue

        # Debug: show first few product codes
        if downloaded_count + failed_count < 3:
            print(f"Debug: Processing product code: '{product_code}' (in url_mapping: {product_code in url_mapping})")

        # Get product details
        product_data = {
            "code": product_code,
            "createk_code": str(row.get('Mã Createk (Link drive tổng)', '')).strip() if pd.notna(row.get('Mã Createk (Link drive tổng)')) else '',
            "name": str(row.get('Tên Sản phẩm (MÃ SP chi tiết)', '')).strip() if pd.notna(row.get('Tên Sản phẩm (MÃ SP chi tiết)')) else '',
            "name_alt": str(row.get('Tên Sản phẩm (MÃ SP chi tiết).1', '')).strip() if pd.notna(row.get('Tên Sản phẩm (MÃ SP chi tiết).1')) else '',
            "unit": str(row.get('Đơn vị tính', '')).strip() if pd.notna(row.get('Đơn vị tính')) else '',
            "vehicle_type": str(row.get('Loại xe', '')).strip() if pd.notna(row.get('Loại xe')) else '',
            "specs": str(row.get('Thông số kỹ thuật', '')).strip() if pd.notna(row.get('Thông số kỹ thuật')) else '',
            "description": str(row.get('Giới thiệu sản phẩm', '')).strip() if pd.notna(row.get('Giới thiệu sản phẩm')) else '',
            "note": str(row.get('NOTE', '')).strip() if pd.notna(row.get('NOTE')) else '',
            "category": str(row.get('Bộ phận', '')).strip() if pd.notna(row.get('Bộ phận')) else '',
            "group": str(row.get('Nhóm', '')).strip() if pd.notna(row.get('Nhóm')) else '',
            "image": None
        }

        # Download image if URL exists
        if product_code in url_mapping:
            image_url = url_mapping[product_code]

            # Determine output path
            category_slug = sanitize_filename(product_data["category"]).lower().replace(' ', '-')
            group_slug = sanitize_filename(product_data["group"]).lower().replace(' ', '-')

            category_dir = output_dir / category_slug
            group_dir = category_dir / group_slug

            # Get file extension from URL
            ext = get_file_extension_from_url(image_url)
            filename = f"{product_code.replace('.', '-')}{ext}"
            output_path = group_dir / filename

            # Download image
            if download_image(image_url, output_path):
                product_data["image"] = f"{category_slug}/{group_slug}/{filename}"
                downloaded_count += 1
            else:
                failed_count += 1

        products_data["products"].append(product_data)

    # Save JSON data
    json_path = Path(JSON_FILE)
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(products_data, f, ensure_ascii=False, indent=2)

    print(f"\n{'='*60}")
    print("Download Summary")
    print(f"{'='*60}")
    print(f"Categories processed: {len(products_data['categories'])}")
    print(f"Products processed: {len(products_data['products'])}")
    print(f"Images downloaded: {downloaded_count}")
    print(f"Images failed: {failed_count}")
    print(f"Data saved to: {JSON_FILE}")
    print(f"Images saved to: {OUTPUT_DIR}/")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
