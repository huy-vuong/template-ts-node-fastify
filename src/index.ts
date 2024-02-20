import 'module-alias/register';

import Cors from '@fastify/cors';
import Env from '@fastify/env';
import Fastify from 'fastify';
import App from 'template-ts-node-fastify/app';
import { EnvSchema } from 'template-ts-node-fastify/schemas/env-schema';

async function start() {
  const fastify = Fastify({ logger: true });

  await fastify.register(Env, {
    schema: EnvSchema,
    dotenv: true,
  });

  await fastify.register(Cors, { origin: true });

  await fastify.register(App);

  try {
    fastify.listen({ port: Number(process.env.PORT ?? 3000) });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start().then(() => {});
