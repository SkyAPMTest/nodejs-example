'use strict';
const Service = require('egg').Service;
const http = require('http');

class UserService extends Service {
  async find(uid) {
    const result = await this.app.mysql.query(
        'SELECT * FROM test_01 where id=?',
        [1]);

    sendHttpRequest();

    return {
      name: 'test',
      age: 18,
      result,
    };
  }
}

function sendHttpRequest() {
  var options = {
    host: 'localhost',
    path: '/user/' + 456,
    port: '17001',
  };
  var req = http.request(options);
  req.end();
}

module.exports = UserService;
