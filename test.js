let blockify = require('./');

let fs = require('fs');
let code = fs.readFileSync('test.js').toString();

blockify(code).then(buffer => {
	fs.writeFileSync('out.png', buffer);
	console.log('done!')
})