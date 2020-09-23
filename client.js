const net = require('net');
const constants = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: constants.IP,
    port: constants.PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Connection Established');

  });
  conn.on('connect', () => {
    conn.write('Name: JFK');

  }
  );

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};
module.exports = connect;
