const fs = require('fs');
const https = require('https');
const path = require('path');

const images = {
  'h1.png': 'https://raw.githubusercontent.com/pub-assets/beverages/main/coca.png',
  'h2.png': 'https://raw.githubusercontent.com/pub-assets/beverages/main/pepsi.png',
  'h3.png': 'https://raw.githubusercontent.com/pub-assets/beverages/main/sting.png',
  'h4.png': 'https://raw.githubusercontent.com/pub-assets/beverages/main/heineken.png',
  'h5.png': 'https://raw.githubusercontent.com/pub-assets/beverages/main/333.png',
  'h6.png': 'https://raw.githubusercontent.com/pub-assets/beverages/main/saigon.png'
};

// Fallback high quality beverage URLs from reliable CDNs / Unsplash
const onlineUrls = {
  'h1.png': 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&auto=format&fit=crop&q=80', // Coca Cola
  'h2.png': 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&auto=format&fit=crop&q=80', // Pepsi
  'h3.png': 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=300&auto=format&fit=crop&q=80', // Energy drink / Sting red
  'h4.png': 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&auto=format&fit=crop&q=80', // Heineken beer
  'h5.png': 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=300&auto=format&fit=crop&q=80', // 333 / Beer can
  'h6.png': 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?w=300&auto=format&fit=crop&q=80'  // Saigon beer bottle
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve()));
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  const targets = ['src/assets', 'public/assets'];
  for (const dir of targets) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  for (const filename of Object.keys(onlineUrls)) {
    const url = onlineUrls[filename];
    for (const dir of targets) {
      const dest = path.join(dir, filename);
      try {
        await download(url, dest);
        console.log(`Successfully saved ${filename} to ${dir}`);
      } catch (err) {
        console.error(`Error downloading ${filename}: ${err.message}`);
      }
    }
  }
}

run();
