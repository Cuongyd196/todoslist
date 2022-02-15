FROM node:12.19.1-alpine3.10 as build-step
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn run build

CMD [ "node", "dist/server.js" ]
