FROM node:14.17.6-alpine3.14

RUN apk add --no-cache bash \
    && apk add tzdata \
    && cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /home/node/app
COPY . .

RUN npm install -g @nestjs/cli@8.0.0

USER node
