# Skywalking egg example

## Dependent three-party components
* Nodejs 8+
* Mysql

## Quick Start

### Deploy skywalking backend
1. Look up the [compatiblity list](https://github.com/OpenSkywalking/skywalking-nodejs/blob/master/docs/compatibility-list.md)
2. Download releases from Apache official website. [Link](http://skywalking.apache.org/downloads/)
3. Deploy backend on local. See [collector in standalone mode doc](https://github.com/apache/incubator-skywalking/blob/master/docs/en/Deploy-backend-in-standalone-mode.md)

### Modify MySQL Configuration
Modify the `config/config.default.js` file

```
config.mysql = {
    client: {
      // mysql host
      host: 'localhost',
      // mysql port
      port: '3306',
      // mysql username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'test',
    },
    app: true,
    agent: false,
  };
```

### Deploy egg example

```bash
$ npm i
$ npm run dev
$ curl http://localhost:7001/user/1
```

After you do above those actions, wait a moment and then you can find that the tracing data will be find in Skywalking UI(default: http://localhost:8080).

