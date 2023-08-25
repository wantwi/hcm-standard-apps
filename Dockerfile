FROM node:14.17.3
WORKDIR /app

COPY package.json ./
RUN npm i --silent
RUN npm i react-scripts@5.0.0 -g --silent

COPY . ./

CMD [ "npm", "start" ]