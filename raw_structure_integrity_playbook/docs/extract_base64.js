const fs = require('fs');
const html = fs.readFileSync('C:/Users/Nishant/Downloads/raw-structure-construction-engineering.full-page.Woblo/raw-structure-construction-engineering/index.html', 'utf8');

const ids = ['YU4bdJs7Pxvs6xbPAMiKnFwD0A', 'XevLGaPtsCniv0VETXlJSmNKo'];

ids.forEach(id => {
  const pos = html.indexOf(id);
  if (pos !== -1) {
    const srcIndex = html.indexOf('src="data:image/jpeg;base64,', pos);
    if (srcIndex !== -1 && srcIndex - pos < 2000) {
      const start = srcIndex + 'src="data:image/jpeg;base64,'.length;
      const end = html.indexOf('"', start);
      const base64Str = html.substring(start, end);
      const buf = Buffer.from(base64Str, 'base64');
      const outPath = 'c:/Users/Nishant/Desktop/construction/raw-structure-construction-engineering.assets.Woblo/' + id + '.jpg';
      fs.writeFileSync(outPath, buf);
      console.log('SUCCESS: Extracted and saved', id, 'size:', buf.length, 'bytes');
    } else {
      console.log('src="data:image..." not found near', id);
    }
  }
});
