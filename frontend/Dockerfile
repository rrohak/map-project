FROM node:12

RUN mkdir -p /map-app

WORKDIR /map-app

COPY package*.json /map-app/

RUN npm install
RUN npm install -g @angular/cli

COPY . /map-app/

EXPOSE 4200

CMD ng serve --host 0.0.0.0
