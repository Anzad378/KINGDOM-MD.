FROM node:lts-buster
RUN git clone https://github.com/Anzad378/KINGD0M-MD/root/mr kingdom_bot
WORKDIR /root/mr kingdom_bot
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
