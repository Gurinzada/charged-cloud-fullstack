# Projeto Full Stack Charged Cloud

## Descrição
- Este projeto tem o objetivo de demonstrar minhas habilidades e conheicmentos em Desenvolvimento Web Full-Stack.
- A aplicação tem sua base em utilizar Nest.js (Backend), Vite (Frontend) e Mysql (Banco de dados).

## Checklist de Tarefas

### Progresso : 69.20%

1. Backend
- [X] Autenticação de Usuário (Via Google).
- [X] CRUD de Empresas.
- [X] Desenvolver uma API RESTful utilizando Nest.js
- [X] Implementar endpoints para as operações de criação, leitura, atualização e exclusão de empresas.
- [x] Conectar a API a um banco de dados MySQL para persistência dos dados.

2. Frontend
- [X] Utilizar Vite como ferramenta de build para o projeto frontend.
- [X] Login com autenticação via Google
- [ ] Visualização da lista de empresas.
- [ ] Formulários para criação e edição de empresas.
- [ ] Funcionalidade para exclusão de empresas.
- [X] Garantir uma interface responsiva e amigável ao usuário.

3. Banco de Dados
- [X] Modelar a tabela de empresas com campos relevantes (exemplo: ID, nome, endereço, telefone, etc.).
- [ ] Utilizar práticas adequadas de modelagem e normalização.




## Imagens Aplicação


## Como utilizar o serviço do Google
1. Acesse o link `https://console.cloud.google.com` e esteja logado com sua conta Google.
2. Na guia `Acesso Rápido` clique em `APIs e Serviços`
![imagem_help](./assetsforread/instructionsGoogle.png)
3.

## Como usar
1. Primeiramente tenha o `node` e o `npm` instalados em sua máquina. Você pode verificar suas versões no terminal de seu computador (`node -v` `npm -v`).
2. Após fazer o download do projeto entre nós diretórios frontend e backend, e rode o comando `npm install` para instalar as depedências do projeto.
3. Configure as váriaveis ambientes no arquivo `.env` disponível no diretório `backend` de acordo com seu serviço Google, também configure a `DATABASE_URL` de acordo com seu banco de dados `mysql://seu_usuario:sua_senha@localhost:3306/nome_do_banco_de_dados?schema=public`.
4. Configurado, execute o comando `npx prisma migrate dev` para realizar as migrações para o seu banco de dados, assim criando tabelas e definindo a estrutura.
5. Agora no frontend, rode o comando `npm run dev` para iniciar a aplicação frontend e em seguida no backend rode `npm run start:dev` para rodar a aplicação backend.
6. Aproveite a experiência.

## Tecnologias Utilizadas e Justificativas Tecnicas

- Adicionei uma tabela de usuários para persistir os dados básicos retornados pela autenticação do Google. Isso permite gerenciar melhor os usuários autenticados e preparar a aplicação para futuras expansões, como controle de permissões ou suporte a outros métodos de autenticação.

## Autor
- Augusto Mariano