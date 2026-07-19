import fs from 'fs';
import path from 'path';

const srcDir = './src';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk(srcDir);

files.forEach((file) => {
  if (file.endsWith('.astro') || file.endsWith('.ts')) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace names
    let updated = content
      .replace(/Desa Makmur/g, 'Desa Sukasari')
      .replace(/DESA MAKMUR/g, 'DESA SUKASARI')
      .replace(/desamakmur\.go\.id/g, 'desasukasari.go.id');
      
    // Specific standalone "Makmur" replacements in tables/data
    updated = updated.replace(/'Makmur'/g, "'Sukasari'")
                     .replace(/"Makmur"/g, '"Sukasari"')
                     .replace(/>Makmur</g, '>Sukasari<');

    if (content !== updated) {
      fs.writeFileSync(file, updated, 'utf8');
      console.log(`Updated: ${file}`);
    }
  }
});
