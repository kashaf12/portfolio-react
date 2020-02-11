
FROM node:8.10.0-alpine

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .
CMD ["npm","start"]
