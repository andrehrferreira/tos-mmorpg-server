FROM node:18 as builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
FROM node:18-alpine
WORKDIR /app

COPY package*.json ./

COPY --from=builder /app/dist ./dist

COPY .env .
COPY database.sqlite .

EXPOSE 3000

CMD ["npm", "run", "start"]
