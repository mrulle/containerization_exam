FROM node:20.3.0
COPY . ./app
VOLUME ./dist:/app/dist
WORKDIR /app
RUN ["npm", "install"]
RUN ["npm", "run", "build"]

FROM nginx:1.25.0-alpine
COPY ./dist /app
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
