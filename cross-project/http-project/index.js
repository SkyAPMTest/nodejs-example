require('skywalking-nodejs').start({
  applicationCode: 'http-project',
  directServers: 'localhost:11800'
});

const http = require('http');
var mysql = require('mysql');
const port = 3000;

const requestHandler = (request, response) => {
  var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'test',
  });

  connection.connect();

  connection.query('SELECT SLEEP(1)', function(error, results, fields) {
    if (error) throw error;
    response.end('test');
  });


};

const serverB = http.createServer(requestHandler);

serverB.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});

