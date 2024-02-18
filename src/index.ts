import 'module-alias/register';

import Fastify from 'fastify';
import { getHello } from 'template-ts-node-fastify/hello';

const fastify = Fastify({ logger: true });

fastify.get('/', async (request, reply) => {
  reply.send({
    message: getHello(),
    method: request.method,
    url: request.url,
    query: request.query,
    headers: request.headers,
  });
});

fastify.post('/', async (request, reply) => {
  reply.send({
    message: getHello(),
    method: request.method,
    url: request.url,
    query: request.query,
    headers: request.headers,
    body: request.body,
  });
});

async function start() {
  try {
    fastify.listen({ port: Number(process.env.PORT ?? 3000) });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start().then(() => {});
