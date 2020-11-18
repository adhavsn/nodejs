const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('request received... '+ req.url);

    if(req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
    else if (req.url === '/api/contact'){
        res.writeHead(200, {'content-Type': 'application/json'});
        var a = [{name:'Madhu', age: 50}, {name:'Muhil', age:9}];
        res.end(JSON.stringify(a));
    }
    else {
        res.writeHead(200, {'content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
});
    
server.listen(3000, 'localhost', () => {console.log('Server is listening at port 3000...')});


