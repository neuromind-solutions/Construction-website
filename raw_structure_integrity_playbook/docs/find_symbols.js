const fs = require('fs');
const html = fs.readFileSync('C:/Users/Nishant/Downloads/raw-structure-construction-engineering.full-page.Woblo/raw-structure-construction-engineering/index.html', 'utf8');

const symbolIds = ['2942266250', '3406721480', '872839198', '388653749', '547985882', '3642559178'];

for (const id of symbolIds) {
  const pattern = 'id="' + id + '"';
  const pos = html.indexOf(pattern);
  if (pos !== -1) {
    const chunk = html.substring(pos - 10, pos + 350);
    console.log('=== SYMBOL:', id, '===');
    console.log(chunk);
  } else {
    console.log('SYMBOL DEF NOT FOUND for', id);
  }
}
