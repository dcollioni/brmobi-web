FROM node:7.6-slim

WORKDIR /usr/src/app
# For some reason this fails terribly and
# halts the build process. Gotta fix this.
# RUN npm install yarn -g

COPY package.json /usr/src/app/
RUN yarn install --prod

COPY serverbuild /usr/src/app/
COPY build /usr/src/app/build/

CMD ["node", "index.js"]
