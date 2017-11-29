FROM node:carbon

COPY package.json /package.json

RUN apt-get update
RUN apt-get install -y build-essential
RUN apt-get install -y nodejs
RUN npm install minimatch -g
RUN npm install graceful-fs -g
RUN npm install gulp -g
RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start", "gulp"]
