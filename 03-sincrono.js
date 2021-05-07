const fs = require('fs');

const filepath ='./archivo.txt';

console.log('antes de leer')

let data = fs.readFileSync(filepath);

console.log('archivo:', data.toString());