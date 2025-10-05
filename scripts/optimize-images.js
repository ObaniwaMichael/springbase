import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const sourceDir = path.resolve('src/assets');
const outBase = path.resolve('public/images');
const sizes = [1920, 1280, 960, 640];
const manifest = { albums: {} };

/** Ensure directory exists */
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

/** Map file to album folder by filename (basic mapping for now) */
function mapToAlbum(filename) {
  const f = filename.toLowerCase();
  
  // Science Lab & Computer Facilities
  if (
    f.includes('computer') || 
    f.includes('lab') || 
    f.includes('utilities') ||
    f.startsWith('img_175') || 
    f.startsWith('img_176') || 
    f.startsWith('img_177') || 
    f.startsWith('img_178') || 
    f.startsWith('img_179') || 
    f.startsWith('img_180')
  ) {
    return 'science-lab';
  }
  
  // Staff & Leadership
  if (f.includes('8eada9e5') || f.includes('teachers')) {
    return 'staff';
  }
  
  // Independence Day Parade
  if (f.includes('c3fc96ba') || f.includes('independence day') || f.includes('parade')) {
    return 'parade';
  }
  
  // Assemblies & Welcome Events
  if (f.includes('af7c268b') || f.includes('142af87f') || f.includes('assemblies') || f.includes('welcome')) {
    return 'assemblies';
  }
  
  // Celebrations & Events
  if (f.includes('celebr') || f.includes('celebration') || f.includes('events') || f.includes('promotion')) {
    return 'celebrations';
  }
  
  // Classroom Activities
  if (
    f.includes('classroom') ||
    f.includes('clssroom') ||
    f.includes('studlife') ||
    f.includes('stulife') ||
    // Explicit mapping requested for WA0030..WA0035
    f.startsWith('img-20251004-wa0030') ||
    f.startsWith('img-20251004-wa0031') ||
    f.startsWith('img-20251004-wa0032') ||
    f.startsWith('img-20251004-wa0034') ||
    f.startsWith('img-20251004-wa0035')
  ) {
    return 'classrooms';
  }
  
  // Campus Tour & Facilities
  if (
    f.includes('overview') || 
    f.includes('primary') || 
    f.includes('tour') || 
    f.includes('recreation') ||
    f.includes('hall') ||
    f.includes('facilities') ||
    f.includes('school bus') ||
    f.includes('school view') ||
    f.includes('secondary school')
  ) {
    return 'campus-tour';
  }
  
  // Sports & Athletics
  if (f.includes('sports') || f.includes('athletics') || f.includes('playground')) {
    return 'sports';
  }
  
  // WhatsApp Images (Community Outreach)
  if (f.includes('whatsapp')) {
    return 'community-outreach';
  }
  
  // Generic IMG files (Community Outreach)
  if (f.startsWith('img-2025')) {
    return 'community-outreach';
  }
  
  // Default fallback
  return 'community-outreach';
}

async function processImage(filePath) {
  const filename = path.basename(filePath);
  const album = mapToAlbum(filename);
  const outDir = path.join(outBase, album);
  ensureDir(outDir);

  let image;
  let meta;
  
  try {
    image = sharp(filePath);
    meta = await image.metadata();
  } catch (error) {
    console.warn(`Skipping unsupported format: ${filename} (${error.message.split('(')[0]})`);
    return;
  }

  // Generate responsive sizes in WebP
  const files = [];
  for (const width of sizes) {
    if (meta.width && meta.width < width) continue;
    const outName = filename.replace(/\.[^.]+$/, `-${width}.webp`);
    const dest = path.join(outDir, outName);
    await image.clone().resize({ width }).webp({ quality: 82 }).toFile(dest).catch(() => {});
    if (fs.existsSync(dest)) files.push(path.posix.join(album, outName));

    // Progressive JPEG fallback
    const jpgName = filename.replace(/\.[^.]+$/, `-${width}.jpg`);
    const jpgDest = path.join(outDir, jpgName);
    await image
      .clone()
      .resize({ width })
      .jpeg({ quality: 85, progressive: true, mozjpeg: true })
      .toFile(jpgDest)
      .catch(() => {});
    if (fs.existsSync(jpgDest)) files.push(path.posix.join(album, jpgName));
  }

  // Also write an original-size WebP
  const outName = filename.replace(/\.[^.]+$/, `.webp`);
  const origDest = path.join(outDir, outName);
  await image.clone().webp({ quality: 82 }).toFile(origDest).catch(() => {});
  if (fs.existsSync(origDest)) files.push(path.posix.join(album, outName));

  // And an original-size progressive JPEG
  const jpgOrig = filename.replace(/\.[^.]+$/, `.jpg`);
  const jpgOrigDest = path.join(outDir, jpgOrig);
  await image
    .clone()
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(jpgOrigDest)
    .catch(() => {});
  if (fs.existsSync(jpgOrigDest)) files.push(path.posix.join(album, jpgOrig));

  // Only add to manifest if we successfully created at least one file
  if (files.length > 0) {
    if (!manifest.albums[album]) manifest.albums[album] = [];
    manifest.albums[album].push({
      base: filename.replace(/\.[^.]+$/, ''),
      files
    });
  }
}

function listJpgs(dir) {
  return fs.readdirSync(dir)
    .filter(f => /\.(jpe?g|png)$/i.test(f))
    .map(f => path.join(dir, f));
}

async function main() {
  ensureDir(outBase);
  const files = listJpgs(sourceDir);
  if (files.length === 0) {
    console.log('No images found in', sourceDir);
    return;
  }
  console.log('Processing', files.length, 'images...');
  for (const f of files) {
    try {
      await processImage(f);
      console.log('Processed', path.basename(f));
    } catch (err) {
      console.warn('Skipped (unsupported or corrupt):', path.basename(f));
    }
  }
  // write manifest
  ensureDir(outBase);
  fs.writeFileSync(path.join(outBase, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('Done. Output in', outBase, 'and manifest written.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});


