import Fastify from 'fastify'

const app = Fastify({ logger: false })

app.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

app.listen({ port: 8080 }, () => {
    console.log('Server is running on port 8080')
})
