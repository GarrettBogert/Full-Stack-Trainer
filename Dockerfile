FROM node:16
LABEL author ="Garrett Bogert"
ENV NODE_ENV=production
WORKDIR /usr/src/app
EXPOSE 3000
COPY /build/ .
RUN npm install -g n
RUN n 12.18.2
RUN yarn global add serve
ENTRYPOINT ["serve"]