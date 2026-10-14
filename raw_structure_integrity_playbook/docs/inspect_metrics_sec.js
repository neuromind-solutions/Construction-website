const fs = require('fs');
const html = fs.readFileSync('C:/Users/Nishant/Downloads/raw-structure-construction-engineering.full-page.Woblo/raw-structure-construction-engineering/index.html', 'utf8');

const pos = html.indexOf('38+');
// find the parent section
const sectionStart = html.lastIndexOf('<section', pos);
const sectionEnd = html.indexOf('</section>', pos);
console.log('Section start:', sectionStart, 'end:', sectionEnd);
if (sectionStart !== -1 && sectionEnd !== -1) {
  const sec = html.substring(sectionStart, sectionEnd + 10);
  console.log('Section length:', sec.length);
  // find all data-framer-name
  const names = Array.from(sec.matchAll(/data-framer-name="([^"]+)"/g)).map(m => m[1]);
  console.log('Framer names inside metrics section:', Array.from(new Set(names)));
}
