const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const sourcePath = path.join(root, 'words.js');
const outputDir = path.join(root, 'private');
const outputPath = path.join(outputDir, 'word-db.json');

if (!fs.existsSync(sourcePath)) {
    console.error('words.js was not found.');
    process.exit(1);
}

const source = fs.readFileSync(sourcePath, 'utf8');
const wordDb = vm.runInNewContext(`${source}\nWORD_DB;`, {}, {
    filename: 'words.js',
    timeout: 5000,
});

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(wordDb), 'utf8');

const books = Object.keys(wordDb).length;
const bytes = fs.statSync(outputPath).size;
console.log(`Exported ${books} books to ${outputPath} (${bytes} bytes).`);
