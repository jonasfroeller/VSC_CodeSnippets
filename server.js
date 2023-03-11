// Backend Framework
const fastify = require('fastify')({ logger: true });
const path = require('path');

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
})

// API
fastify.get('/snippets/*', function (request, reply) {
  reply.sendFile(`/snippets/${request.params['*']}`);
})

fastify.get('/', function (req, reply) {
  reply.sendFile('index.html')
})

// Server Start
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: 'localhost' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();