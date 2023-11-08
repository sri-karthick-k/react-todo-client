FROM ubuntu:23.04

RUN apt update && \
    apt install -y nodejs yarn git 

RUN pacman -Scc --noconfirm

RUN git clone https://github.com/sri-karthick-k/react-todo-client.git

WORKDIR /react-todo-client

RUN yarn install

CMD [ "yarn", "start" ]