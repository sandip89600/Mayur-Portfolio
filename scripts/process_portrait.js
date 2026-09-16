import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function processPortrait() {
  const inputPath = 'd:/Mayur Portfolio/public/mayur.jpg';
  const outputPath = 'd:/Mayur Portfolio/public/mayur_portrait.png';

  const metadata = await sharp(inputPath).metadata();
  console.log('Original Dimensions:', metadata.width, metadata.height);

  const w = metadata.width;
  const h = metadata.height;

  // Head to chest region:
  // Head is centered horizontally around 0.5 * w, starting at ~0.18 * h down to ~0.52 * h (chest/blazer)
  const cropLeft = Math.floor(w * 0.22);
  const cropTop = Math.floor(h * 0.17);
  const cropWidth = Math.floor(w * 0.56);
  const cropHeight = Math.floor(h * 0.38);

  console.log(`Cropping head-to-chest: top=${cropTop}, left=${cropLeft}, w=${cropWidth}, h=${cropHeight}`);

  // Extract the cropped region
  const croppedBuffer = await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .resize(600, 700, { fit: 'cover' })
    .toBuffer();

  // Create an elliptical / subject alpha feather mask to cleanly isolate Mayur from background
  const maskSvg = `
    <svg width="600" height="700" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bodyGlow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
          <stop offset="65%" stop-color="#fff" stop-opacity="1"/>
          <stop offset="85%" stop-color="#fff" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="fadeBottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
          <stop offset="75%" stop-color="#fff" stop-opacity="1"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </linearGradient>
        <mask id="compositeMask">
          <rect width="600" height="700" fill="url(#bodyGlow)" />
          <rect width="600" height="700" fill="url(#fadeBottom)" />
        </mask>
      </defs>
      <!-- Ellipse containing head to chest -->
      <ellipse cx="300" cy="350" rx="270" ry="340" fill="white" filter="blur(8px)"/>
    </svg>
  `;

  // Apply transparency and dark edge vignette
  await sharp(croppedBuffer)
    .ensureAlpha()
    .composite([
      {
        input: Buffer.from(maskSvg),
        blend: 'dest-in'
      }
    ])
    .png({ quality: 100 })
    .toFile(outputPath);

  console.log('Saved processed portrait to:', outputPath);
}

processPortrait().catch(err => {
  console.error('Error processing portrait:', err);
});
