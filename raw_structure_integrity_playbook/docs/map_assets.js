const fs = require('fs');
const html = fs.readFileSync('C:/Users/Nishant/Downloads/raw-structure-construction-engineering.full-page.Woblo/raw-structure-construction-engineering/index.html', 'utf8');

const images = [
  '1Z6NS71E0hj9I28vHqgoVDEVo8.jpg',
  '6QMjWT0pZjHhUYaPIXKvYkjjcU.jpg',
  'a37tu7mhireD1ajDd8iWq6BbrmY.jpg',
  'cHIsaLk2xKFqBdK4OgR66pZJk64.jpg',
  'dIXtk7wOxfTY46ikTp5PnquPG7Q.jpg',
  'Ejb9xKkRa10W0e7hV42bq6Rf7GY.jpg',
  'eqrLSETPpkJONqFnCfAZhUsKem0.jpg',
  'kQlbW52BNh2N5AkiRh0cQPwGWA.jpg',
  'lApTWiLV6p4H3Ej4xwxVAC3TLY.jpg',
  'lQ9et0c22tqAJR1VFU4r9RQCf3w.jpg',
  'mUdMPbzNFGwgVSZnu6VXATDtkPs.jpg',
  'N3y8qP9josbTFQ04tUWWGGECc.jpg',
  'uBBAplfPyIWicTCsVvWg7UU.jpg',
  'umiAul3BCC6J5wiNHx7VCJRrs.jpg',
  'wQi3fuduH13jDNFulIx6mxVM2CY.jpg',
  'XCsFzEjL11OrhWvehONxhZVKUo.jpg',
  'Y613vnAJPUR911i0n2tx8ZwHM.jpg',
  'yBBY6MbyHbb3vNonuZPaW1SRx4.jpg',
  'ZXGCQ9ramf2nzvPDkqJe6G1p7E.jpg'
];

for (const img of images) {
  const base = img.replace('.jpg', '');
  const pos = html.indexOf(base);
  if (pos !== -1) {
    const before = html.substring(Math.max(0, pos - 800), pos);
    const framerNames = Array.from(before.matchAll(/data-framer-name="([^"]+)"/g)).map(m => m[1]);
    console.log(img + ' -> Names: [' + framerNames.slice(-4).join(', ') + ']');
  }
}
