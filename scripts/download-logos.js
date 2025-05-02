// This script downloads the company logos and saves them to the public/images/logos directory
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create logos directory if it doesn't exist
const logosDir = path.join(__dirname, '../public/images/logos');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(logosDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', err => {
      fs.unlink(filePath, () => {}); // Delete the file if there's an error
      console.error(`Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

// List of logos to download
const logos = [
  { name: 'chelsea.png', url: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg' },
  { name: 'bupa.png', url: 'https://www.bupa.com/~/media/Images/Content-images/Logos/Bupa-logo.ashx' },
  { name: 'microsoft.png', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'equinor.png', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Equinor_logo.svg' },
  { name: 'fujitsu.png', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Fujitsu-Logo.svg' },
  { name: 'clarion.png', url: 'https://www.clarionhg.com/media/1043/clarion_housing_logo_rgb.png' },
  { name: 'nationwide.png', url: 'https://upload.wikimedia.org/wikipedia/en/8/82/Nationwide_Building_Society.svg' },
  { name: 'gilmartins.png', url: 'https://www.gilmartins.co.uk/wp-content/themes/gilmartins/images/logo.png' }
];

// Download all logos
async function downloadAllLogos() {
  for (const logo of logos) {
    try {
      await downloadImage(logo.url, logo.name);
    } catch (err) {
      console.error(`Failed to download ${logo.name}: ${err.message}`);
    }
  }
  console.log('All downloads completed');
}

downloadAllLogos();
