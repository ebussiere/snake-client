const net = require('net');


const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Connection Established');

  });
  conn.on('connect', () => {
    conn.write('Name: JFK');
    moves();
  }
  );

  const moves = () => {
    setTimeout(() => {
      conn.write('Move: up');
    }, 100);
    setTimeout(() => {
      conn.write('Move: up');
    }, 200);
    setTimeout(() => {
      conn.write('Move: left');
    }, 300);
    setTimeout(() => {
      conn.write('Move: left');
    }, 400);
    setTimeout(() => {
      conn.write('Move: left');
    }, 500);
    setTimeout(() => {
      conn.write('Move: left');
    }, 600);
  };



  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};
module.exports = connect;
