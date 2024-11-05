#Sample Dockerfile for NodeJS Apps

FROM node:16



WORKDIR /app

COPY ["package.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]