let http = require('http'); // 
let reqCount = 0; 

let server = http.createServer((req, res) => { //call back
	console.log(">> new request received:"+req.url + " count:"+reqCount++);
	res.statusCode = 200;
	res.write('Hello World! count :'+reqCount);
	res.end(); //res sent to browser
});

server.listen(8080);

// ab -n 10000 -c 100 http://localhost:3000/


// node http fs
// app custom  mathLib
// third party (from other source)