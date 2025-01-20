# bossabox-backend-challenge

Sua tarefa é construir uma API e banco de dados para a aplicação VUTTR (Very Useful Tools to Remember). A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

A aplicação pode ser construída utilizando qualquer linguagem, banco de dados, frameworks, libraries e ferramentas de sua preferência (Ex: Node + Express + Mongoose + MongoDB, PHP + Lumen + RedBean + PostgreSQL, etc). Apesar disso, a stack mais comum para squads aqui na BossaBox é **Node.js,** seguida por **PHP. Ruby** é incomum, mas aparece em raros casos.

A API deverá ser documentada utilizando o formato [API Blueprint](https://apiblueprint.org/) ou [Swagger](https://swagger.io/docs/specification/basic-structure/).

## O que será avaliado

Queremos avaliar sua capacidade de desenvolver e documentar um back-end para uma aplicação. Serão avaliados:

- Código bem escrito e limpo;
- Quais ferramentas foram usadas, como e por quê, além do seu conhecimento das mesmas;
- Seu conhecimento em banco de dados, requisições HTTP, APIs REST, etc;
- Sua capacidade de se comprometer com o que foi fornecido;
- Sua capacidade de documentação da sua parte da aplicação.

## O mínimo necessário

- Uma aplicação contendo uma API real simples, sem autenticação, que atenda os requisitos descritos abaixo, fazendo requisições à um banco de dados para persistência;
- README.md contendo informações básicas do projeto e como executá-lo;
- [API Blueprint](https://apiblueprint.org/) ou [Swagger](https://swagger.io/docs/specification/basic-structure/) da aplicação.

## Bônus

Os seguintes itens não são obrigatórios, mas darão mais valor ao seu trabalho (os em negrito são mais significativos para nós)

- Uso de ferramentas externas que facilitem o seu trabalho;
- Cuidados especiais com otimização, padrões, entre outros;
- Migrations ou script para configuração do banco de dados utilizado;
- **Testes**;
- **Conteinerização da aplicação**;
- **Autenticação e autorização** (**OAuth, JWT**);
- Sugestões sobre o challenge embasadas em alguma argumentação.

# Requisitos

## 0: A API deve responder na porta 3000

## 1: Deve haver uma rota para listar todas as ferramentas cadastradas

`GET /tools`

Resposta:

```jsx
[
    {
        id: 1,
        title: "Notion",
        link: "https://notion.so",
        description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
        tags: [
            "organization",
            "planning",
            "collaboration",
            "writing",
            "calendar"
        ]
    },
    {
        id: 2,
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        tags: [
            "api",
            "json",
            "schema",
            "node",
            "github",
            "rest"
        ]
    },
    {
        id: 3,
        title: "fastify",
        link: "https://www.fastify.io/",
        description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
        tags: [
            "web",
            "framework",
            "node",
            "http2",
            "https",
            "localhost"
        ]
    }
]
```

## 2: Deve ser possível filtrar ferramentas utilizando uma busca por tag

`GET /tools?tag=node`   (*node* é a tag sendo buscada neste exemplo)

Resposta:

```jsx
[
    {
        id: 2,
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        tags: [
            "api",
            "json",
            "schema",
            "node",
            "github",
            "rest"
        ]
    },
    {
        id: 3,
        title: "fastify",
        link: "https://www.fastify.io/",
        description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
        tags: [
            "web",
            "framework",
            "node",
            "http2",
            "https",
            "localhost"
        ]
    }
]
```

## 3: Deve haver uma rota para cadastrar uma nova ferramenta

O corpo da requisição deve conter as informações da ferramenta a ser cadastrada, sem o ID (gerado automaticamente pelo servidor). A resposta, em caso de sucesso, deve ser o mesmo objeto, com seu novo ID gerado.

`POST /tools
Content-Type: application/json`

```jsx
{
    "title": "hotel",
    "link": "https://github.com/typicode/hotel",
    "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
    "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
}
```

Resposta:

`Status: 201 Created`

`Content-Type: application/json`

```jsx
{
    "title": "hotel",
    "link": "https://github.com/typicode/hotel",
    "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
    "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"],
    "id":5
}
```

## 4: O usuário deve poder remover uma ferramenta por ID

`DELETE /tools/:id`

Resposta:

`Status: 200 OK`

```jsx
{}
```

# Informações de execução do projeto

Abaixo estão as informações para executar o projeto que foi desenvolvido nesse repositório.

## Pelo Repositório

Realize o `git clone` do repositório.

É recomendado que esteja usando a `v22.9.0` do node em sua maquina.

Após confirmar a versão do node e ter o repositório na sua máquina execute o `npm install` para instalar as dependencias do projeto para poder executar.

No arquivo `.env_template` temos o templete do `.env`, crie o seu com a conexão do MongoDb que ja você já tenha instanciado.

Para rodar os testes unitários execute o comando `npm run test`, ele já esta configurado corretamente e fará todas as validações necessárias.

Para rodar a aplicação no ambitente de desenvolvimento pode rodar o comando `npm run start:dev` ou para executar sem o live reload execute `npm run start`.

## Utilizando docker 

Foi criado um arquivo `docker-compose.yml` neste repositório onde está toda a configuração para poder rodar o projeto em sua maquina da maneira mais simples possível, porém irei colocar aqui para facilidade de analise.

Para rodar somente nossa aplicação caso ja tenha uma instancia do MongoDB rodando e nao quiser rodar mais uma imagem docker no seu ambiente voce pode usar o comando abaixo: 
```
version: '3.8'
services:
  bossabox:
    image: pauloaugusto/bossabox-challenge:latest
    container_name: bossabox
    ports:
      - "3000:3000"
    environment:
      PORT: 3000 # Porta padrão da Aplicação
      MONGOCONNECT: mongodb://mongodbnouser:27017/mydatabase # Conexão do MongoDB
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - mongodbnouser
    command: ["npm", "start"]
```

Caso queria ter a experiencia de subir por completo para ter certeza que irá funcionar e nao ter nenhum problema alinhando configuração, pode usar o `docker-compose.yml` abaixo:

```
version: '3.8'
services:
  bossabox:
    image: pauloaugusto/bossabox-challenge:latest
    container_name: bossabox
    ports:
      - "3000:3000"
    environment:
      PORT: 3000
      MONGOCONNECT: mongodb://mongodbnouser:27017/mydatabase 
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - mongodbnouser
    command: ["npm", "start"]

  mongodbnouser:
    image: mongo:latest
    container_name: mongodbnouser
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```
## Arquivo do Postman

Foi disponibilizado um arquivo para executar as requisiçãoes pelo postman, encontra-se no diretório `postman/BossaBox.postman_collection.json`, pode importar e após iniciar a aplicação utilizar para fazer as requisições. 

Também compativel com o Insomnia e com o HTTPie.
