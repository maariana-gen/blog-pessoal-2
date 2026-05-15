# Blog Pessoal API

---

<div align="center">

<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/MySQL-003B57?style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/TypeORM-FE0902?style=for-the-badge" />

</div>

<br />

API REST desenvolvida com **NestJS**, **TypeORM** e **MySQL** para gerenciamento de usuários, temas e postagens em uma aplicação de blog pessoal.

O projeto conta com autenticação, relacionamento entre entidades e operações completas de CRUD, seguindo boas práticas de desenvolvimento backend.

---

# Funcionalidades

- Cadastro e autenticação de usuários
- CRUD completo de:
  - Usuários
  - Temas
  - Postagens
- Relacionamento entre entidades
- Validação de dados
- Criptografia de senha
- Integração com banco de dados MySQL
- Estrutura organizada seguindo arquitetura do NestJS

---

# Tecnologias Utilizadas

- NestJS
- TypeScript
- TypeORM
- MySQL
- JWT Authentication
- BCrypt
- Node.js

---

# Estrutura do Projeto

```bash
src/
│
├── auth/
├── usuario/
├── tema/
├── postagem/
├── service/
├── model/
├── controller/
└── main.ts
```

---

# Como Executar o Projeto

## Pré-requisitos

- Node.js
- MySQL
- Git

---

## Clone o repositório

```bash
git clone https://github.com/maariana-gen/Blog-Pessoal-API.git
```

---

## Acesse a pasta

```bash
cd Blog-Pessoal-API
```

---

## Instale as dependências

```bash
npm install
```

---

## Execute o projeto

```bash
npm run start:dev
```

---

# Banco de Dados

O projeto utiliza MySQL como banco de dados principal.

Configure as variáveis de ambiente no arquivo:

```env
.env
```

Exemplo:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_DATABASE=db_blogpessoal
```

---

# Deploy

API publicada utilizando Render.

---

# Desenvolvedora

Desenvolvido por **Mariana Soares**.
