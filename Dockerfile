FROM node:12-alpine

RUN apk add --update curl

EXPOSE 8080

WORKDIR /usr/src/

COPY package.json package-lock.json* ./ 

RUN npm install && npm cache clean --force

COPY . .

ARG JWT_TOKEN_BUILD

ENV JWT_TOKEN=$JWT_TOKEN_BUILD

CMD [ "node", "src/server.js" ]
