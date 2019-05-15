let blockify = require('./index');
import * as fs from "fs";

let code = `function test() {
	console.log('This is test code!');
}`

blockify(code).then(async (buffer: Buffer) => {
	// `buffer` is now an image buffer. You can save this wherever
	// you need to, or do whatever you need to do with it.
	// For now, let's save it as out.png
	fs.writeFile('../out.png', buffer, (err) => {
		if (err) throw err;
		console.log("File successfully written");
	});
})
