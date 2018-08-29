'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_1533091045808_1594';
  config.middleware = [];

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3307',
      user: 'root',
      password: 'root',
      database: 'test',
    },
    app: true,
    agent: false,
  };
  return config;
};
