FROM ubuntu:24.04

WORKDIR /app
RUN apt-get update && apt-get install curl -y
RUN curl -O https://internetcomputer.org/install.sh
RUN chmod +x ./install.sh
RUN DFXVM_INIT_YES=1 ./install.sh
RUN ln -snf /bin/bash /bin/sh
RUN source $HOME/.local/share/dfx/env && dfx --version
