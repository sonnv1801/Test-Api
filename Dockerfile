FROM node

WORKDIR /app

COPY package*.json ./


RUN npm install -g npm@8.19.2
RUN npm install

COPY . .

EXPOSE 3001

CMD ["nodemon", "app/index.js" ]
