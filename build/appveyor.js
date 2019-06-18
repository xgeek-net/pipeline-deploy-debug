const fs = require('fs');
const path = require('path');

console.log('>>>process.argv', process.argv);
if(process.argv.length == 2) {
  console.error('argv error.');
  process.exit(1);
}
// console.log(process.argv[2]);
var decode = Buffer.from(process.argv[2],'base64');
const filePath = path.join(__dirname, '../src/config/client.js');
// console.log(filePath);
fs.writeFile(filePath, decode, function(err) {
  if(err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Build client.js Done!');
  process.exit(0);
});