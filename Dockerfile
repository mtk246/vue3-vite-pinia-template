FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /app

EXPOSE 8000

USER node

CMD [ "npm", "run", "dev" ]
