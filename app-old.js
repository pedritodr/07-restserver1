const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200);
        res.write('hola mundo');
        res.end();
    })
    .listen(8080);