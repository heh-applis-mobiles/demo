import Fastify from 'fastify'
import cors from '@fastify/cors'
import caching from '@fastify/caching'
import { COURSES } from './courses.js'

const fastify = Fastify({
  logger: true
})

await fastify.register(cors, {
  origin: [
    'http://localhost:4173',
    'http://localhost:5173',
  ]
})

await fastify.register(caching, {
  privacy: caching.privacy.NOCACHE,
})

fastify.get('/api/courses', async (request, reply) => {
  reply.etag("constant-course-list")
  return COURSES
})

fastify.get('/api/courses/lastAccessed', async (request, reply) => {
  return COURSES.filter(course => course.lastAccessed).toSorted((a, b) => b.lastAccessed.getTime() - a.lastAccessed.getTime())[0] || null
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
