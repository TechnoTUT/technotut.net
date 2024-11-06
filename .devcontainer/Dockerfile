FROM ubuntu:24.04

RUN apt-get update && apt-get install -y curl git nodejs npm \
    && npm install -g n \
    && n stable \
    && apt-get purge -y nodejs npm \
    && apt-get autoremove -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*