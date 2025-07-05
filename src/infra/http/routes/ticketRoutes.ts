import { CreateTicketController } from "@/feature/CreateTicket/CreateTicketController";
import { CreateTicketService } from "@/feature/CreateTicket/CreateTicketService";
import { PrismaTicketRepository } from "@/infra/db/prisma/PrismaTicketRepository";
import { FastifyInstance } from "fastify";

export async function ticketRoutes(fastify: FastifyInstance) {
    const repo = new PrismaTicketRepository()
    const service = new CreateTicketService(repo)
    const controller = new CreateTicketController(service)

    fastify.post('/', (req, reply) => controller.create(req, reply))
}