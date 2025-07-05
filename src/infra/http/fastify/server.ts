import Fastify from 'fastify'
import { ticketRoutes } from '../routes/ticketRoutes'

const app = Fastify({ logger: false })

app.register(ticketRoutes, { prefix: '/ticket' })

app.listen({ port: 8080 }, () => {
    console.log('Server is running on port 8080')
})
