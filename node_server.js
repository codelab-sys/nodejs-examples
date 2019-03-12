var http = require('http');
var requestIp = require('request-ip');

http.createServer(function(request, response){
	response.writeHead(200, {
		'Content-type': 'text/html'
	});
	console.log(requestIp.getClientIp(request));
	response.end('<h1>Hello World..!</h1>');
}).listen(52273, function(){
	console.log('Server running at http://127.0.0.1:52273/');
});