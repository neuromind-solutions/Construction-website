const fs = require('fs');
const html = fs.readFileSync('C:/Users/Nishant/Downloads/raw-structure-construction-engineering.full-page.Woblo/raw-structure-construction-engineering/index.html', 'utf8');

const metricPos = html.indexOf('38+');
const before = html.substring(metricPos - 2000, metricPos);
console.log('--- BEFORE 38+ ---');
console.log(before);
