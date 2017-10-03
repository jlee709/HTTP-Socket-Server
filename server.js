// jshint esversion:6
console.log('server.js Linked');


// goal number 1 is to set up the server first and get it working 

console.log('how to test server here'); 

const net = require('net');
const http = require('http');
const PORT = process.env.PORT || 8080;
const clients = [];



const server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
});





server.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
