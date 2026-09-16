import sharp from 'sharp';

async function createRefinedCutout() {
  const inputPath = 'd:/Mayur Portfolio/public/mayur.jpg';
  const outputPath = 'd:/Mayur Portfolio/public/mayur_cutout.png';

  const metadata = await sharp(inputPath).metadata();
  const w = metadata.width;
  const h = metadata.height;

  // Head starts around y = 0.18*h, chest ends at y = 0.52*h
  const cropLeft = Math.floor(w * 0.22);
  const cropTop = Math.floor(h * 0.17);
  const cropWidth = Math.floor(w * 0.56);
  const cropHeight = Math.floor(h * 0.36);

  console.log(`Cropping head to chest: w=${cropWidth}, h=${cropHeight}`);

  const cropped = await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .resize(700, 700, { fit: 'cover' })
    .toBuffer();

  // Create clean alpha mask with soft feathered edges for seamless blending into the circular frame
  const svgMask = `
    <svg width="700" height="700" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
          <stop offset="68%" stop-color="#ffffff" stop-opacity="1" />
          <stop offset="88%" stop-color="#ffffff" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
      </defs>
      <circle cx="350" cy="350" r="330" fill="url(#grad)" filter="blur(6px)"/>
    </svg>
  `;

  await sharp(cropped)
    .ensureAlpha()
    .composite([
      {
        input: Buffer.from(svgMask),
        blend: 'dest-in'
      }
    ])
    .png()
    .toFile(outputPath);

  console.log('Saved cutout to:', outputPath);
}

createRefinedCutout().catch(console.error);
