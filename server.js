// jshint esversion:6


//constant vars
const fs = require('fs');
const net = require('net');
const PORT = process.env.PORT || 8080;
const path = require('path');
var headData;

var server = net.createServer((client) => {
  //call back to fire once data recieved
  client.on('data', (data) => {
    console.log('recieving data', data.toString());
    let contentLength = data.length;
    let httpResponse = '\n HTTP/1.1 200 OK \n Server: Best Web Server\n Date: ' + 
    new Date() + '\n Content-Type: text/html, charset=utf-8 \n Content-Length: ' + 
    contentLength + '\n Connection: keep-alive \n\n ' + data.toString();
    client.write(httpResponse);
    
    // thats in 2 callbacks and ends client after data and call-backs execute
    headData = processRequest(data);
    read(headData, function(data){

      client.end();
    });
    // call back data end 
  });
  // client.end('goodbye\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
});


server.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});

// external functions

//function to locate and set uri to variablef
function processRequest(data){
  const header = data.toString().split(" ");
  var method = header[0];
  var uri = header[1];
  var cache = header[1];
  var connection = header[10];
  console.log(uri, '<-------URI ');
  console.log(method, "<-------method");
  console.log(cache, '<-----http');
  console.log(connection, '<-----connection');
}

//reading the data
function read(filename, cb) {
  let filepath = path.join(__dirname, '.', 'html', filename);
  console.log(filepath,' this is the FILEPATH HERE!');

  // asynch doesnt fire till future 
  fs.readFile(filepath,'utf8', (err, data) => {
    if (err) throw err;
    console.log('readFile', data);
    cb(data);
  });
}



















