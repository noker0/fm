const path = require('path')

console.log(path.basename(__filename));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

const obj = path.parse(__filename)
console.log(obj.ext);

console.log(path.join(__dirname,"dataType","monoBrain","games"));