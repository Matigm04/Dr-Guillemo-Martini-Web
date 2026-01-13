# Script para convertir JPG a WebP con sharp
# Primero instala: npm install --save-dev sharp
# Luego ejecuta: node convert-to-webp.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔄 Intentando cargar sharp...\n');

try {
  const sharp = (await import('sharp')).default;
  
  const imagePath = path.join(__dirname, 'src', 'assets', 'carrusel');
  const files = fs.readdirSync(imagePath);
  const jpgFiles = files.filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg'));
  
  console.log(`📸 Convirtiendo ${jpgFiles.length} imágenes a WebP...\n`);
  
  for (const file of jpgFiles) {
    const inputPath = path.join(imagePath, file);
    const outputPath = inputPath.replace(/\.(jpg|jpeg)$/i, '.webp');
    
    const statsBefore = fs.statSync(inputPath);
    const sizeBefore = (statsBefore.size / 1024 / 1024).toFixed(2);
    
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    const statsAfter = fs.statSync(outputPath);
    const sizeAfter = (statsAfter.size / 1024 / 1024).toFixed(2);
    const reduction = ((1 - statsAfter.size / statsBefore.size) * 100).toFixed(1);
    
    console.log(`✅ ${file}`);
    console.log(`   ${sizeBefore} MB → ${sizeAfter} MB (-${reduction}%)\n`);
  }
  
  console.log('🎉 ¡Conversión completada!');
  console.log('\n📝 Ahora actualiza las importaciones en Hero.jsx:');
  console.log('   Cambia .JPG por .webp en las rutas de imágenes\n');
  
} catch (error) {
  if (error.code === 'ERR_MODULE_NOT_FOUND') {
    console.log('❌ Sharp no está instalado.');
    console.log('\n💡 Instálalo con: npm install --save-dev sharp');
    console.log('   Luego ejecuta nuevamente: node convert-to-webp.js\n');
  } else {
    console.error('❌ Error:', error.message);
  }
}
