# LogiTech Express

## Projeto de Engenharia de Software

### Sobre o projeto

O projeto tem como objetivo propor uma solução para melhorar a organização e o funcionamento do sistema da LogiTech Express.

A proposta busca solucionar problemas relacionados ao banco de dados, à organização do Back-End e à segurança das informações.

## Problemas identificados

- Banco de dados desorganizado.
- Falta de organização no Back-End.
- Informações confidenciais expostas.
- Necessidade de melhorar a organização e manutenção do sistema.

## Solução proposta

O sistema será organizado em camadas:

- Routes
- Controllers
- Services
- Repositories
- Models
- Database

## Banco de dados

O banco possui as seguintes entidades:

- Motorista
- Veículo
- Rota
- Entrega

O modelo foi organizado buscando evitar dados repetidos e facilitar a manutenção do sistema.

## Segurança

As informações confidenciais serão armazenadas através de variáveis de ambiente.

O arquivo `.env` não deve ser enviado para o GitHub.

## Testes

Foi criado um plano de testes no arquivo `tests/TESTS.md`, contendo cenários para motoristas, veículos, entregas e segurança.

## Próximas etapas

- Implementar as rotas.
- Conectar o sistema ao banco de dados.
- Realizar os testes.
- Corrigir possíveis erros.
- Validar o funcionamento do sistema.
