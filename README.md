# Projeto Full Stack Charged Cloud

## Descrição
- Este projeto tem o objetivo de demonstrar minhas habilidades e conheicmentos em Desenvolvimento Web Full-Stack.
- A aplicação tem sua base em utilizar Nest.js (Backend), Vite (Frontend) e Mysql (Banco de dados).

## Checklist de Tarefas

### Progresso: ✅ 100% Completo.

1. Backend
- [X] Autenticação de Usuário (Via Google).
- [X] CRUD de Empresas.
- [X] Desenvolver uma API RESTful utilizando Nest.js
- [X] Implementar endpoints para as operações de criação, leitura, atualização e exclusão de empresas.
- [X] Conectar a API a um banco de dados MySQL para persistência dos dados.

2. Frontend
- [X] Utilizar Vite como ferramenta de build para o projeto frontend.
- [X] Login com autenticação via Google
- [X] Visualização da lista de empresas.
- [X] Formulários para criação e edição de empresas.
- [X] Funcionalidade para exclusão de empresas.
- [X] Garantir uma interface responsiva e amigável ao usuário.

3. Banco de Dados
- [X] Modelar a tabela de empresas com campos relevantes (exemplo: ID, nome, endereço, telefone, etc.).
- [X] Utilizar práticas adequadas de modelagem e normalização.




## Imagens Aplicação


## Como utilizar o serviço do Google
1. Acesse o link `https://console.cloud.google.com` e esteja logado com sua conta Google.
2. Na guia `Acesso Rápido` clique em `APIs e Serviços`
![imagem_help](./assetsforread/instructionsGoogle.png)
3.

## Como usar
1. Primeiramente, tenha o node e o npm instalados em sua máquina. Você pode verificar suas versões no terminal de seu computador (node -v e npm -v).

2. Após fazer o download do projeto, entre nos diretórios frontend e backend e rode o comando npm install para instalar as dependências do projeto.

3. Configure as variáveis de ambiente no arquivo .env disponível no diretório backend, de acordo com seu serviço Google. Também configure a DATABASE_URL de acordo com seu banco de dados, como o exemplo abaixo: mysql://seu_usuario:sua_senha@localhost:3306/nome_do_banco_de_dados?schema=public.

4. Após configurar, execute o comando npx prisma migrate dev para realizar as migrações no seu banco de dados, criando as tabelas e definindo a estrutura.

5. Agora, no frontend, rode o comando npm run dev para iniciar a aplicação frontend. Em seguida, no backend, rode npm run start:dev para iniciar a aplicação backend.

6. Aproveite a experiência.

### Configuração do Arquivo `.env`
Certifique-se de configurar as variáveis de ambiente no backend. Um exemplo de configuração:

```env
DATABASE_URL=mysql://usuario:senha@localhost:3306/chargedcloud
CLIENT_ID=seu_google_client_id
CLIENT_SECRET=seu_google_client_secret
CALLBACK_URL
SECRET=sua_chave_secreta
```

## Tecnologias Utilizadas e Justificativas Tecnicas

- Adicionei uma tabela de usuários para persistir os dados básicos retornados pela autenticação do Google. Isso permite gerenciar melhor os usuários autenticados e preparar a aplicação para futuras expansões, como controle de permissões ou suporte a outros métodos de autenticação.

- Utilizei o `Prisma` (ORM) devido ao seu mapeamento e tipagem estática automática, que combina muito com projetos que utilizam JavaScript/TypeScript, reduzindo erros durante a implementação, abstraindo consultas SQL complexas e permitindo que a lógica de negócio seja priorizada. Além disso, há suporte para diferentes tipos de banco de dados, como PostgreSQL, SQLite e MongoDB.

- Utilizei o `jsonwebtoken` (JWT) para permitir que o sistema seja stateless, contribuindo para a criação de uma API RESTful.

- Fiz uso da biblioteca `Axios` no Frontend, pois ela oferece uma interface mais rica e fácil de usar e configurar em comparação ao fetch. Além disso, o Axios transforma automaticamente os dados enviados e recebidos, serializando objetos em JSON ao enviar para o servidor e deserializando respostas JSON automaticamente.

- No backend, utilizei as bibliotecas `passport-google-oauth20` e `Passport.js` para realizar a autenticação usando o OAuth 2.0 do Google.

- Também utilizei a biblioteca `class-validator` para validar os campos da tabela `Company`.

### Tecnologias Principais Utilizadas
- **Nest.js**: Framework backend para construir APIs robustas e escaláveis.
- **Vite**: Ferramenta de build frontend para velocidade e facilidade de desenvolvimento.
- **MySQL**: Banco de dados relacional utilizado para persistência de dados.
- **Prisma**: ORM para tipagem estática e abstração de consultas SQL complexas.
- **Axios**: Biblioteca para requisições HTTP no frontend.
- **JWT**: Autenticação stateless para APIs RESTful.
- **Passport.js**: Middleware para autenticação, incluindo OAuth 2.0.
- **class-validator**: Biblioteca para validação de dados no backend.

## Autor
- Augusto Mariano