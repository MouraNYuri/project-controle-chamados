import { prisma } from "./PrismaClient";
import { ITicketRepository } from "@/feature/CreateTicket/protocols/ITicketRepository";
import { TicketEntity } from "@/feature/CreateTicket/protocols/TicketEntity";

export class PrismaTicketRepository implements ITicketRepository {
    async create({ setor, nucleo, problema }: TicketEntity): Promise<TicketEntity> {
        const result = await prisma.ticket.create({
            data: {
                setor,
                nucleo,
                problema
            }
        })
        return new TicketEntity(
            result.setor,
            result.nucleo,
            result.problema
        )
    }
}