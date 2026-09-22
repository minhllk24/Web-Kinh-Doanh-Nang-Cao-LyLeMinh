const fs = require('fs');
const https = require('https');
const path = require('path');

const customersData = [
  {
    "CustomerTypeId": 1,
    "CustomterTypeName": "VIP",
    "Customers": [
      {
        "Id": "Cus123",
        "Name": "Obama",
        "Email": "obama@gmail.com",
        "Age": 67,
        "Image": "assets/avatars/obama-avatar.png"
      },
      {
        "Id": "Cus456",
        "Name": "Kim jong Un",
        "Email": "unun@gmail.com",
        "Age": 38,
        "Image": "assets/avatars/unun-avatar.png"
      },
      {
        "Id": "Cus789",
        "Name": "Putin",
        "Email": "putin@gmail.com",
        "Age": 77,
        "Image": "assets/avatars/putin-avatar.png"
      }
    ]
  },
  {
    "CustomerTypeId": 2,
    "CustomterTypeName": "Normal",
    "Customers": [
      {
        "Id": "Cus000",
        "Name": "Hồ Cẩm Đào",
        "Email": "hodao@gmail.com",
        "Age": 16,
        "Image": "assets/avatars/hodao-avatar.png"
      },
      {
        "Id": "Cus111",
        "Name": "Tập Cận Bình",
        "Email": "binhbinh@gmail.com",
        "Age": 67,
        "Image": "assets/avatars/binhbinh-avatar.png"
      }
    ]
  }
];

// Using reliable high-quality avatar placeholders from Unsplash
const avatars = {
  'obama-avatar.png': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80',
  'unun-avatar.png': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
  'putin-avatar.png': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
  'hodao-avatar.png': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80',
  'binhbinh-avatar.png': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80'
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
  const baseTargets = ['src/assets', 'public/assets'];
  
  for (const base of baseTargets) {
    const dataDir = path.join(base, 'data');
    const avatarDir = path.join(base, 'avatars');
    
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    if (!fs.existsSync(avatarDir)) fs.mkdirSync(avatarDir, { recursive: true });
    
    // Write JSON
    fs.writeFileSync(path.join(dataDir, 'customers.json'), JSON.stringify(customersData, null, 2));
    
    // Download avatars
    for (const filename of Object.keys(avatars)) {
      const url = avatars[filename];
      const dest = path.join(avatarDir, filename);
      try {
        await download(url, dest);
        console.log(`Successfully saved ${filename} to ${avatarDir}`);
      } catch (err) {
        console.error(`Error downloading ${filename}: ${err.message}`);
      }
    }
  }
}

run();
