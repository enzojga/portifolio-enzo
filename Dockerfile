FROM node:latest as angular
WORKDIR /app
COPY package.json /app
RUN npm i --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/portifolio-enzo /usr/share/nginx/html
COPY  ./config/nginx.conf /etc/nginx/conf.d/default.conf

#docker build -t portifolio-enzo .
#docker run -p 8081:80