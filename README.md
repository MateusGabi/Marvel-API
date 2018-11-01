# Integração com API da Marvel Comics

## Objetivo

Criar uma página que liste 50 fotos dos personagens da marvel. Ao se clicar em 1 personagem, deverá redirecionar para uma página de detalhe do personagem, onde mostrará o nome e descrição do personagem.

Use a API Oficial: https://developer.marvel.com

## Arquitetura

![aly](Arquitetura.svg)

O projeto possui 4 partes:
  - Serviço de Autenticação;
  - Serviço de Personagens;
  - Serviço GraphQL; e
  - Frontend;

### Serviço de Autenticação

Encontra-se no diretório `backend_authentication`. Foi escrito em Python utilizando o framework Flask. Este sistema encapsula as regras de negócio para a autenticação com a Marvel API.

### Serviço de Personagens

Encontra-se no diretório `backend_characters`. Foi escrito em Kotlin utilizando o framework Javalin. Se comunica com o Serviço de Autenticação para a obtenção das chaves de acesso, realiza requisição para a obtenção dos dados de personagens e fornece Serviço de Listagem e Visualização de Personagens.

### Serviço GraphQL

Encontra-se no diretório `backend_graphql`. Foi escrito em JavaScript (ES6) utilizando GraphQL. Esse é um facilitador chamado de BFF, Backend for Frontend. Ele serve para simplificar as requisições ao serviço. Desta forma, o cliente não precisa saber o endereço dos serviços e nem as regras de negócio da aplicação.

### Frontend

Encontra-se no diretório `frontend`. Foi escrito em JavaScript (ES6) utilizando o framework ReactJS. Ele se comunica apenas com o BFF.

## Execute o projeto

Primeiramente você precisa ter instalado o Docker e o Docker Compose.

Crie uma cópia de `.env-example` e renomeie para `.env`
