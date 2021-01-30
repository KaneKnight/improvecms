FROM node:14

WORKDIR /opt/cms

COPY . .

EXPOSE 1337

CMD ["npm", "start"]