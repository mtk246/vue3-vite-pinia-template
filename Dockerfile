FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Change ownership of the application files to the 'node' user
RUN chown -R node:node /app

# Set proper permissions for the entire /app directory
RUN chmod -R 755 /app

EXPOSE 8000

USER node

CMD [ "npm", "run", "dev" ]
