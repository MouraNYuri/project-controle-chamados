import { ICreateEntity } from "./protocols/ICreateEntity";
import { ITicketRepository } from "./protocols/ITicketRepository";
import { TicketEntity } from "./protocols/TicketEntity";

export class CreateTicketService implements ICreateEntity {
    constructor(private readonly repo: ITicketRepository){}

    async create({ setor, nucleo, problema }: TicketEntity): Promise<TicketEntity> {
        const ticket = new TicketEntity(setor, nucleo, problema)
        return await this.repo.create(ticket)
    }
}