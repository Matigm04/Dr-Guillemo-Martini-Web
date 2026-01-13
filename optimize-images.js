# Script para optimizar imágenes JPG a WebP
# Ejecutar con: node optimize-images.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🖼️  Script de Optimización de Imágenes\n');
console.log('Este script requiere que instales sharp:');
console.log('npm install --save-dev sharp\n');
console.log('Luego ejecuta: node optimize-images.js\n');

const imagePath = path.join(__dirname, 'src', 'assets', 'carrusel');

try {
  const files = fs.readdirSync(imagePath);
  const jpgFiles = files.filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg'));
  
  console.log(`✅ Encontradas ${jpgFiles.length} imágenes JPG:\n`);
  jpgFiles.forEach((file, i) => {
    const filePath = path.join(imagePath, file);
    const stats = fs.statSync(filePath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`${i + 1}. ${file} (${sizeMB} MB)`);
  });

  console.log('\n📝 Para optimizarlas, ejecuta:\n');
  console.log('npm install --save-dev sharp');
  console.log('node convert-to-webp.js');
  
} catch (error) {
  console.error('❌ Error:', error.message);
}
