const http = require('http');
const fs = require('fs');

//Write file using stream
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', {encoding:'utf8'});
//     var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', {encoding:'utf8'});
//     myReadStream.pipe(myWriteStream);


// const server = http.createServer((req, res) => {
//     console.log('request received... '+ req.url);
//     res.writeHead(200, {'content-Type': 'text/html'});
//     var myReadStream = fs.createReadStream(__dirname + '/index.html', {'encoding':'utf8'});
//     // var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
//     // myReadStream.pipe(myWriteStream);
//     myReadStream.pipe(res);

// });

const server = http.createServer((req, res) => {
    console.log('request received... '+ req.url);
    res.writeHead(200, {'content-Type': 'application/json'});
    var a = {
        'fname': 'Madu',
        'lname': 'Nadavarasu',
        'age': 50

    }

    res.end(JSON.stringify(a));
    // var myReadStream = fs.createReadStream(__dirname + '/index.html', {'encoding':'utf8'});
    // var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
    // myReadStream.pipe(myWriteStream);
    // myReadStream.pipe(res);

});
server.listen(3000, 'localhost', () => {console.log('Server is listening at port 3000...')});


