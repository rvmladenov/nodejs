const express = require('express');

var hostname = 'localhost';
var port = process.env.PORT || 3000;

var app = express();

app.use((req, res, next) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body>Bla</body></html>');
});

app.listen(port, hostname, ()=> {
    console.log('Blqqq');
});