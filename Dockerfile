FROM node:14

# ENV PORT 3011

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install


COPY . /usr/src/app

# EXPOSE 3011

CMD "npm"  "storybook:export"