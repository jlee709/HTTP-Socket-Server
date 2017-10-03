// jshint esversion:6

console.log('client linked');

const fs = require('fs');
const net = require('net');
const PORT = process.env.PORT || 8080;

// createing slient connection 
var client = net.createConnection(PORT, () => {
  //'connect' listener

  console.log('connected to server!');
  process.stdin.pipe(client);
  client.pipe(process.stdout);
});



// writable on port
process.stdin.on('end', () => {
  process.stdout.write('end');
});