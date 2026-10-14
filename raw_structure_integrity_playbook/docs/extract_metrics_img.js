const fs = require('fs');
const html = fs.readFileSync('C:/Users/Nishant/Downloads/raw-structure-construction-engineering.full-page.Woblo/raw-structure-construction-engineering/index.html', 'utf8');

const metricPos = html.indexOf('38+');
const before = html.substring(0, metricPos);
const lastSrc = before.lastIndexOf('src="data:image/');
if (lastSrc !== -1) {
  const start = html.indexOf('base64,', lastSrc) + 'base64,'.length;
  const end = html.indexOf('"', start);
  const base64Str = html.substring(start, end);
  const buf = Buffer.from(base64Str, 'base64');
  const outPath = 'c:/Users/Nishant/Desktop/construction/raw-structure-construction-engineering.assets.Woblo/metrics_model.jpg';
  fs.writeFileSync(outPath, buf);
  console.log('Saved metrics_model.jpg, size:', buf.length);
  
  // also check what framer name or class is on this img
  console.log(html.substring(lastSrc - 200, lastSrc + 100));
}
