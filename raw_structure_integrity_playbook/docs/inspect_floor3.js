const fs = require('fs');
const html = fs.readFileSync('C:/Users/Nishant/Downloads/raw-structure-construction-engineering.full-page.Woblo/raw-structure-construction-engineering/index.html', 'utf8');

const pos = html.indexOf('Floor 3 Accent');
if (pos !== -1) {
  const chunk = html.substring(pos, pos + 1500);
  console.log(chunk.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}
