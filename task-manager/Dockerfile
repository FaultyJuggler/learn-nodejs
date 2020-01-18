FROM node:13
ENV MONGO_HOST "host.docker.internal"
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]
EXPOSE 3000