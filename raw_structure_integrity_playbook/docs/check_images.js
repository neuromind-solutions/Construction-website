const fs = require('fs');
const html = fs.readFileSync('C:/Users/Nishant/Downloads/raw-structure-construction-engineering.full-page.Woblo/raw-structure-construction-engineering/index.html', 'utf8');

// Find all src, data-src, srcset
const framerImgUrls = Array.from(new Set(Array.from(html.matchAll(/https:\/\/framerusercontent\.com\/images\/([a-zA-Z0-9_\-\.]+)/g)).map(m => m[1])));
console.log('Total unique framer images referenced in index.html:', framerImgUrls.length);
console.log(framerImgUrls);

// Check if any of them are NOT in the Woblo assets folder
const dir = 'c:/Users/Nishant/Desktop/construction/raw-structure-construction-engineering.assets.Woblo';
const localFiles = fs.readdirSync(dir);
console.log('\nLocal files count:', localFiles.length);

const missing = [];
const present = [];

for (const id of framerImgUrls) {
  const match = localFiles.find(f => f.startsWith(id));
  if (match) {
    present.push({ id, file: match });
  } else {
    missing.push(id);
  }
}

console.log('Present in local assets (' + present.length + '):', present.map(p => p.file));
console.log('Missing from local assets (' + missing.length + '):', missing);
