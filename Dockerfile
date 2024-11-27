FROM node:18

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5674

CMD ["npm", "start"]