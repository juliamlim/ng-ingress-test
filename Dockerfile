FROM node:alpine

COPY . /app

WORKDIR /app

RUN npm i

ARG SLUG=foo
ENV SLUG=${SLUG}
CMD npm run serve:slug

EXPOSE 4200
