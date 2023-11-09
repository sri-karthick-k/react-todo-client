FROM ubuntu:23.04

RUN apt update && \
    apt install -y nodejs npm git 

RUN npm install -g yarn serve

ARG CACHEBUST
RUN echo $CACHEBUST

RUN git clone https://github.com/sri-karthick-k/react-todo-client.git

WORKDIR /react-todo-client

RUN yarn install && yarn run build

EXPOSE 3000

CMD [ "serve", "-s", "build" ]