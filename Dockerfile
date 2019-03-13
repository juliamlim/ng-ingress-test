FROM node:alpine

COPY . /app

WORKDIR /app

ARG SLUG=foo
ENV SLUG=${SLUG}
CMD npm run serve:slug

EXPOSE 4200
