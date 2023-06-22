# build builder image
FROM node:20.3.0 AS builder
COPY . ./app
WORKDIR /app
RUN ["npm", "install"]
RUN ["npm", "run", "build"]

# build image
FROM nginx:1.25.0-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
