FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --verbose
RUN apt install vim
COPY . .
EXPOSE 10009
CMD [ "npm", "start"]
