// jshint esversion:6
console.log('server.js Linked');



const fs = require('fs');
const net = require('net');
const PORT = process.env.PORT || 8080;
var httpHeader;

var server = net.createServer((socket) => {
  //call back to fire once data recieved
  socket.on('data', (chunk) => {
    console.log('recieving data', chunk.toString());
    socket.end();
  });

  // socket.end('goodbye\n');
}).on('error', (err) => {
  // handle errors here
  throw err;

});


server.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});



function httpSeperator(){
  
}