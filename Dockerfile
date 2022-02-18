FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install curl -y

RUN curl -fsSL https://deb.nodesource.com/setup_current.x -o node_setup.sh
RUN bash node_setup.sh

RUN apt-get install -y nodejs


WORKDIR /src
