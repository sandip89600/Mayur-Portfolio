import sharp from 'sharp';

async function createCrispCutout() {
  const inputPath = 'd:/Mayur Portfolio/public/mayur.jpg';
  const outputPath = 'd:/Mayur Portfolio/public/mayur_cutout.png';
  const portraitPath = 'd:/Mayur Portfolio/public/mayur_portrait.png';

  const metadata = await sharp(inputPath).metadata();
  const w = metadata.width;
  const h = metadata.height;

  // Head starts around y = 0.18*h, chest ends at y = 0.52*h
  const cropLeft = Math.floor(w * 0.20);
  const cropTop = Math.floor(h * 0.16);
  const cropWidth = Math.floor(w * 0.60);
  const cropHeight = Math.floor(h * 0.40);

  console.log(`Cropping head-to-chest in FULL VIBRANT COLOR: w=${cropWidth}, h=${cropHeight}`);

  // Create clean cut-to-cut image without fading at bottom
  const cropped = await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .resize(800, 800, { fit: 'cover', position: 'top' })
    .modulate({
      brightness: 1.05,
      saturation: 1.15, // Vibrant, colorful
    })
    .toBuffer();

  // Save the full color head-to-chest portrait
  await sharp(cropped)
    .png({ quality: 100 })
    .toFile(outputPath);

  await sharp(cropped)
    .png({ quality: 100 })
    .toFile(portraitPath);

  console.log('Saved vibrant color head-to-chest portrait to:', outputPath);
}

createCrispCutout().catch(console.error);
