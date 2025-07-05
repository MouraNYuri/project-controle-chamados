import { TicketEntity } from "./TicketEntity";

export interface ITicketRepository {
    create(ticket: TicketEntity): Promise<TicketEntity>
}