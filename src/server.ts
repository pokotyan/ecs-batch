import * as cors from 'fastify-cors';
import sampleRouter from './routes/sample/router';
import hogeRouter from './routes/hoge/router';

// make web server instance
const server = require('fastify')({
  ajv: {
    removeAdditional: true,
  },
  trustProxy: true,
});

// set routers
server.register(sampleRouter, { prefix: '/api/sample' });
server.register(hogeRouter, { prefix: '/api/hoge' });

// use cors
server.register(cors);

export default server;
