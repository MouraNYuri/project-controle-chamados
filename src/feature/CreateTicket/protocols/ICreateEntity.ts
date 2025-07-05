import { TicketEntity } from "./TicketEntity";

export interface ICreateEntity {
    create(ticket: TicketEntity): Promise<TicketEntity>
}