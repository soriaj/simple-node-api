FROM node:12-alpine

RUN apk add --update curl

EXPOSE 8080

WORKDIR /usr/src/

COPY package.json package-lock.json* ./ 

RUN npm install && npm cache clean --force

COPY . .

CMD [ "node", "src/server.js" ]
