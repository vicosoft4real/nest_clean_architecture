FROM node:12

# Create app directory, this is in our container/in our image
WORKDIR /src/app

# Install app dependencies
COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig.build.json ./

RUN yarn

# Bundle app source
COPY . .


EXPOSE 8080
CMD [ "yarn", "start" ]
