// jshint esversion:6
console.log('server.js Linked');

//constant vars
const fs = require('fs');
const net = require('net');
const PORT = process.env.PORT || 8080;
const path = require('path');
var uriAcc;

var server = net.createServer((socket) => {
  //call back to fire once data recieved
  socket.on('data', (data) => {
    console.log('recieving data', data.toString());
    // thats in 2 callbacks and ends socket after data and call-backs execute
    uriAcc = findUri(data);
    read(uriAcc, function(data){

      socket.end();
    });
    // call back data end 
  });
  // socket.end('goodbye\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
});


server.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});



// external functions

//function to locate and set uri to variable
function findUri(data){
  const header = data.toString();
  const splitingHeader = header.split(" ");
  const seperateHead = header.split(" ");
  var uri = seperateHead[1];
  var uriAcc = uri.toString();
  console.log(uriAcc, 'this is the URI here right here');
  return uriAcc;
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



















