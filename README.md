# API de Controle de Chamados

Essa API permite os Usuários gerenciar os Chamados através de operações CRUD.

## Funcionalidade

Os Usuário devem criar novos Chamados com setor, núcleo, problema e serem capazes de responder os Chamados colocando uma solução.

## Requisitos Funcionais

- [] Cadastrar Chamados
- [] Visualizar Chamados
- [] Atualizar Chamados
- [] Excluir Chamados

## Regras de Négocio

- Os valores enviados pelo Usuário devem ser validados

## Estrutura do Projeto

- `features/`: funcionalidades por domínio (ex: CreateTicket)
- `infra/`: adaptadores de tecnologia como Fastify, Prisma etc
- `protocols/`: contratos (interfaces, entidades, DTOs)
- `controller`: lógica de entrada (Fastify → Service)
- `service`: caso de uso / regra de negócio
- `repository`: abstrações de persistência via interfaces