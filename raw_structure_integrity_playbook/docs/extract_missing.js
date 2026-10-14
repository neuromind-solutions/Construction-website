const fs = require('fs');
const html = fs.readFileSync('C:/Users/Nishant/Downloads/raw-structure-construction-engineering.full-page.Woblo/raw-structure-construction-engineering/index.html', 'utf8');

const ids = ['YU4bdJs7Pxvs6xbPAMiKnFwD0A', 'XevLGaPtsCniv0VETXlJSmNKo'];

ids.forEach(id => {
  const pos = html.indexOf(id);
  if (pos !== -1) {
    const imgTag = html.substring(pos - 100, pos + 3000);
    const srcMatch = imgTag.match(/src="([^"]+)"/);
    if (srcMatch) {
      console.log('ID:', id, 'src starts with:', srcMatch[1].substring(0, 50), 'length:', srcMatch[1].length);
      if (srcMatch[1].startsWith('data:image')) {
        const base64Data = srcMatch[1].replace(/^data:image\/\w+;base64,/, '');
        const buf = Buffer.from(base64Data, 'base64');
        const outPath = 'c:/Users/Nishant/Desktop/construction/raw-structure-construction-engineering.assets.Woblo/' + id + '.jpg';
        fs.writeFileSync(outPath, buf);
        console.log('SAVED embedded base64 image to:', outPath, 'size:', buf.length, 'bytes');
      }
    } else {
      console.log('No src match for ID:', id);
    }
  }
});
