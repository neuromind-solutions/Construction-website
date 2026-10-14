const fs = require('fs');

const content = fs.readFileSync('C:/Users/Nishant/.gemini/antigravity-ide/brain/00db13bc-c56e-4604-8a9f-32e60c75b979/.system_generated/steps/21/content.md', 'utf8');

const framerUrls = content.match(/https:\/\/[a-zA-Z0-9_\-\.]*framerusercontent\.com[^\s"'\)\>]+/g) || [];
const uniqueUrls = Array.from(new Set(framerUrls));

console.log('Total framer URLs:', uniqueUrls.length);

const images = uniqueUrls.filter(u => u.includes('/images/') || u.match(/\.(png|jpe?g|webp|svg|gif)(\?|$)/i));
const fonts = uniqueUrls.filter(u => u.includes('font') || u.endsWith('.woff2'));
const jsModules = uniqueUrls.filter(u => u.endsWith('.mjs') || u.endsWith('.js'));

console.log('Images:', images.length);
console.log('Fonts:', fonts.length);
console.log('JS Modules:', jsModules.length);

fs.writeFileSync('raw_structure_integrity_playbook/docs/extracted_assets.json', JSON.stringify({
  images,
  fonts,
  jsModules,
  all: uniqueUrls
}, null, 2));

console.log('Extracted assets saved to raw_structure_integrity_playbook/docs/extracted_assets.json');
