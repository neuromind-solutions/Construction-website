const fs = require('fs');
const https = require('https');
const path = require('path');

const fontsDir = 'c:/Users/Nishant/Desktop/construction/raw-structure-construction-engineering.assets.Woblo/fonts';
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

const manifest = JSON.parse(fs.readFileSync('c:/Users/Nishant/Desktop/construction/raw_structure_integrity_playbook/docs/extracted_assets.json', 'utf8'));

console.log('Downloading fonts count:', manifest.fonts.length);

manifest.fonts.forEach((fontUrl, idx) => {
  const filename = path.basename(fontUrl).split('?')[0];
  const dest = path.join(fontsDir, filename);
  
  if (fs.existsSync(dest)) {
    console.log('Already exists:', filename);
    return;
  }

  https.get(fontUrl, (res) => {
    if (res.statusCode === 200) {
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`[${idx+1}/${manifest.fonts.length}] Downloaded:`, filename);
      });
    } else {
      console.log(`Failed ${res.statusCode} for`, fontUrl);
    }
  }).on('error', (err) => {
    console.error('Error downloading:', fontUrl, err.message);
  });
});
