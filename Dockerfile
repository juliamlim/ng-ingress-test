FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install

ARG SLUG=foo
ENV SLUG=${SLUG}
CMD npm run serve:slug

EXPOSE 4200
