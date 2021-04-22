FROM node:15.14.0-alpine3.13
WORKDIR app

COPY package*.json tsconfig.json src ./
RUN npm install

RUN npm run build

EXPOSE 3000
CMD ["node", "dist/index.js"]
