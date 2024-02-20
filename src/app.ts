import { FastifyInstance } from 'fastify';
import { getHello } from 'template-ts-node-fastify/hello';

export default async function App(fastify: FastifyInstance): Promise<void> {
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
}
