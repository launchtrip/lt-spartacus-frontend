FROM node:10.13.0-alpine

RUN mkdir -p /var/www/app

WORKDIR /var/www/app

COPY package.json ./
RUN npm install

ADD . /var/www/app
ENV NODE_ENV production
ENV PORT 3000
RUN npm run build

ENTRYPOINT ["npm", "start"]