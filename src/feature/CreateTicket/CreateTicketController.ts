import { FastifyReply, FastifyRequest } from "fastify";
import { ICreateEntity } from "./protocols/ICreateEntity";
import { ITicketModel } from "./protocols/ITicketModel";

export class CreateTicketController {
    constructor(private readonly service: ICreateEntity) {}

    async create(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const ticket = req.body as ITicketModel
            const result = await this.service.create(ticket)
            return reply.status(201).send(result)
        } catch (error) {
            return reply.status(400).send(error)
        }
    }
}