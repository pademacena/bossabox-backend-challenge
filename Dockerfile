# Use a versão mais recente do Node.js como base
FROM node:20-alpine

WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

RUN mkdir -p dist

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/server.js"]