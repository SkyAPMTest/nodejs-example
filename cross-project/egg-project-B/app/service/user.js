'use strict';
const Service = require('egg').Service;
const http = require('http');

class UserService extends Service {
  async find(uid) {
    const result = await this.app.mysql.query(
        'SELECT * FROM test_01 where id=?',
        [1]);

    return {
      name: 'test',
      age: 18,
      result,
    };
  }
}

module.exports = UserService;
