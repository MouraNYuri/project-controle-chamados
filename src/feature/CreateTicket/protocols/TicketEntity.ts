export class TicketEntity {
    constructor(
        public nucleo: string,
        public setor: string,
        public problema: string,
        public solucao?: string,
        public id?: string
    ) {
        if (!nucleo) throw new Error('Núcleo é obrigatório')
        if (!setor) throw new Error('Setor é obrigatório')
        if (!problema) throw new Error('Problema é obrigatório')
    }
}