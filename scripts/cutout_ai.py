import sys
import os

user_site = r'C:\Users\Lenovo\AppData\Roaming\Python\Python314\site-packages'
if user_site not in sys.path:
    sys.path.insert(0, user_site)

from PIL import Image
from rembg import remove

input_path = 'd:/Mayur Portfolio/public/mayur.jpg'
output_path = 'd:/Mayur Portfolio/public/mayur_cutout.png'

print("Opening input image...")
input_img = Image.open(input_path)

w, h = input_img.size
print(f"Image dimensions: {w}x{h}")

# Crop approximately HEAD -> CHEST
crop_box = (int(w * 0.18), int(h * 0.16), int(w * 0.82), int(h * 0.56))
cropped = input_img.crop(crop_box)
print(f"Cropped region: {cropped.size}")

print("Removing background with AI rembg model...")
output = remove(cropped)
output.save(output_path, 'PNG')
print("Saved clean AI transparent cutout to:", output_path)
