// jshint esversion:6
console.log('server.js Linked');

//constant vars
const fs = require('fs');
const net = require('net');
const PORT = process.env.PORT || 8080;
const path = require('path');
const uriAcc = findUri(data);

var server = net.createServer((socket) => {
  //call back to fire once data recieved
  socket.on('data', (data) => {
    console.log('recieving data', data.toString());
    //work on data set here
    // if(findUri(data){};
    findUri(data);
    // call back data end 
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

  //function to locate and set uri to variable

function findUri(data){
  const header = data.toString();
  const splitingHeader = header.split(" ");
  const seperateHead = header.split(" ");
  const uri = seperateHead[1];
  return uri;}

//resading the data
function read(){
  
  fs.readFile(`./html/${findUri}`, (err, data) => {
  
  if (!err && data){
     console.log(data, 'testestesteststsetesetsetststse');
  } return data;
  });
}


