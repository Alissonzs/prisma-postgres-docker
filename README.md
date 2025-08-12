# Projeto com Prisma.js, PostgreSQL e Docker

Este projeto foi desenvolvido como parte da atividade prática para aplicar o uso do **Prisma ORM** com **PostgreSQL** em um container Docker.

## 📌 Tecnologias utilizadas
- Node.js
- TypeScript
- Prisma ORM
- PostgreSQL (via Docker)
- Docker Compose

## 🚀 Passos para execução

1. **Clonar o repositório**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. **Subir o banco de dados no Docker**
```bash
docker-compose up -d
```

3. **Instalar dependências**
```bash
npm install
```

4. **Gerar o cliente Prisma**
```bash
npx prisma generate
```

5. **Rodar as migrações**
```bash
npx prisma migrate dev --name init
```

6. **Executar o projeto**
```bash
npm run dev
```



