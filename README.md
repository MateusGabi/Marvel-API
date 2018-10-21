# Integração com API da Marvel Comics

## Objetivo

Criar uma página que liste 50 fotos dos personagens da marvel. Ao se clicar em 1 personagem, deverá redirecionar para uma página de detalhe do personagem, onde mostrará o nome e descrição do personagem.

Use a API Oficial: https://developer.marvel.com

## Arquitetura

O projeto possui 3 partes:
  - Serviço de Autenticação;
  - Serviço de Personagens;
  - Serviço GraphQL; e
  - Frontend;

### Serviço de Autenticação

Encontra-se no diretório `backend_authentication`. Foi escrito em Python utilizando o framework Flask.

### Serviço de Personagens

Encontra-se no diretório `backend_characters`. Foi escrito em Kotlin utilizando o framework Javalin.

Problemas:
- Eu não sei qual é o IP para acessar o Serviço de Autenticação.

### Serviço GraphQL

Encontra-se no diretório `backend_graphql`. Foi escrito em JavaScript (ES6) utilizando GraphQL.

### Frontend

Encontra-se no diretório `frontend`.

## Execute o projeto

Primeiramente você precisa ter instalado o Docker e o Docker Compose.

Crie uma cópia de `.env-example` e renomeie para `.env`
