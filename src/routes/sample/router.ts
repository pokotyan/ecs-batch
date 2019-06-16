import * as fastify from 'fastify'
import * as get from './get';

export default (fastify: fastify.FastifyInstance, opts: fastify.RouteShorthandOptions, next: any) => {
  fastify.get('/', get.options, get.handler);
  next();
};
