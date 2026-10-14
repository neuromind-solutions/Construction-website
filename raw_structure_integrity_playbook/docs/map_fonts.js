const fs = require('fs');
const css = fs.readFileSync('C:/Users/Nishant/Downloads/raw-structure-construction-engineering.full-page.Woblo/raw-structure-construction-engineering/styles.css', 'utf8');

const fontFaces = Array.from(css.matchAll(/@font-face\s*\{([^}]+)\}/g)).map(m => m[1]);
console.log('Total @font-face rules in styles.css:', fontFaces.length);
fontFaces.forEach(f => {
  const family = (f.match(/font-family:\s*['"]?([^'";]+)/) || [])[1];
  const weight = (f.match(/font-weight:\s*([^;]+)/) || [])[1];
  const style = (f.match(/font-style:\s*([^;]+)/) || [])[1];
  const src = (f.match(/src:\s*url\(([^)]+)\)/) || [])[1];
  console.log('Font:', family ? family.trim() : '?', 'Weight:', weight ? weight.trim() : '?', 'Style:', style ? style.trim() : '?', 'File:', src ? src.split('/').pop().split('?')[0].replace(/['"]/g, '') : 'none');
});
