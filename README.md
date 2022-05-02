# Validação Neoway
Desenvolver uma aplicação de validação de CPF/CNPJ que deve conter uma interface
(UI) para gerenciamento de CPF/CNPJ (CRUD) com a possibilidade filtros, ordenação e
marcação de alguns em uma blocklist.

# Instalação
- na pasta principal, deve dar o comando: `npm install`
- depois entrar na pasta do react-neoway e também dar `npm install` (utilize o comando cd react-neoway para entrar na pasta)

# Front-end
-  O front-end deve ser uma SPA (Single Page Application);
-  O front-end pode ser desenvolvido no framework de sua preferência;

# Back-end

- O back-end deve possuir, minimamente, uma interface REST para integração com o
front-end, mas com liberdade para utilização de outros protocolos, como GraphQL;
- O back-end deve conter uma rota de suporte que retorne as informações de up-time do
servidor e quantidade de consultas realizadas desde o start; (Ex.: /status)
- Os dados deverão ser armazenados no MongoDB ou PostgreSQL.

# Arquivo `config.env`

- Criar um arquivo config.env para poder colocar seus dados.
Exemplo:
```js
PORT=/*Porta do servidor*/
```

# Ferramentas Utilizadas:

- VScode
- Insomnia
- Docker
- MongoDBCompass

# Bibliotecas utilizadas:

- EXPRESS (criar server)
- mongoose (auxiliar na conecção e criação com o mongodb)
- dotenv (configurações globais)

# Bibliotecas utilizadas na parte dev:

- nodemon (auxílio server)
- concurrently (usei para me ajudar a iniciar multi arquivos)

# Start

- utilizar o comando `npm run dev`, ele irá abrir o nodemon para a parte back-end e o react para o front-end.

# GET - Para pegar todos os dados
```http
  localhost:5000
```

# POST - enviar dados
```http
  localhost:5000
```

# Docker - MongoDB
- Criei um container no docker para me auxiliar com o banco de dados, utilizei o seguinte comando: 
`docker run -d -p 27018:27017 -v C:/local_do_arquivo/OndeIreiFazerOBackup:/data/db --name banco_neoway -d mongo`

- Alterei a porta para **27018** para me dar um melhor controle e evitar alguns conflitos.
- **C:/local_do_arquivo/OndeIreiFazerOBackup:/data/db** - Local onde está armazenando um backup do banco de dados do docker/mongodb

# Screenshots - Insomnia
--![App Screenshot](/ImageGit/GetAll-Banco-Calindra.PNG)
--![App Screenshot](/ImageGit/Post-Banco-Calindra.PNG)