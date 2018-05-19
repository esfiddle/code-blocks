let blockify = require('./');

let fs = require('fs'); // not needed for blockify, but needed for this demo


let code = `function test() {
	console.log('This is test code!');
}`

blockify(code).then(buffer => {
	// `buffer` is now an image buffer. You can save this wherever
	// you need to, or do whatever you need to do with it.
	// For now, let's save it as out.png
	fs.writeFileSync('out.png', buffer);
	console.log("YAY WE'RE DONE!");
})