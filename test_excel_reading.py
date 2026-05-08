#!/usr/bin/env python3
"""
Test different ways to read the Excel file to find the correct parsing method.
"""

import pandas as pd
import openpyxl
import sys
import io

# Set UTF-8 encoding for stdout
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

EXCEL_FILE = 'public/2026 _ Danh sách sản phẩm Createk.xlsx'

print("Testing different Excel reading methods...")

# Method 1: Read with openpyxl to see the raw structure
print(f"\n{'='*60}")
print("Method 1: Using openpyxl directly")
print(f"{'='*60}")

wb = openpyxl.load_workbook(EXCEL_FILE, data_only=True)
sheet = wb["Danh sách SP (Chi tiết)"]

print("First 5 rows with row/column indices:")
for row_idx, row in enumerate(sheet.iter_rows(values_only=True), start=1):
    if row_idx <= 5:
        print(f"Row {row_idx}:")
        for col_idx, cell in enumerate(row, start=1):
            if cell is not None:
                print(f"  Col {col_idx}: {str(cell)[:50]}")
    else:
        break

# Method 2: Try reading with different header positions
print(f"\n{'='*60}")
print("Method 2: Try reading with header=0 (default)")
print(f"{'='*60}")

df1 = pd.read_excel(EXCEL_FILE, sheet_name="Danh sách SP (Chi tiết)", header=0)
print("Columns:", list(df1.columns))
print("First row:", df1.iloc[0].to_dict())

# Method 3: Try reading with header=1
print(f"\n{'='*60}")
print("Method 3: Try reading with header=1")
print(f"{'='*60}")

try:
    df2 = pd.read_excel(EXCEL_FILE, sheet_name="Danh sách SP (Chi tiết)", header=1)
    print("Columns:", list(df2.columns))
    print("First row:", df2.iloc[0].to_dict())
except Exception as e:
    print(f"Error: {e}")

# Method 4: Read without header and process manually
print(f"\n{'='*60}")
print("Method 4: Read without header, process manually")
print(f"{'='*60}")

df3 = pd.read_excel(EXCEL_FILE, sheet_name="Danh sách SP (Chi tiết)", header=None)
print("Raw first 5 rows:")
print(df3.head(5).to_string())

# Check if row 1 looks like headers
print(f"\nRow 0 (potential header):")
print(df3.iloc[0].to_dict())

print(f"\nRow 1 (first data row):")
print(df3.iloc[1].to_dict())

print(f"\nRow 2 (second data row):")
print(df3.iloc[2].to_dict())
