## Como Executar:


### Back-end

```bash
# Entrar na pasta da lista 5
cd atviv-wb

# Abrir o Mysql Workbench e executar os sqls de insert
# Caminho para a pasta com os códigos: backend/src/db

# Entrar na pasta do back
cd backend

# Instalar as dependências
npm install

# Iniciando o prisma
npx prisma migrate dev --name init

# Executando o back-end
npm run dev
```

### Front-end

```bash
# Entrar na pasta do front
cd frontend

# Instale as dependências
npm install

# Executando o front-end
npm start
