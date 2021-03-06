FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install react-scripts@3.4.1 -g

COPY . ./

EXPOSE 3000

CMD [ "npm", "start" ]
