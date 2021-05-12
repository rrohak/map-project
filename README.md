# Map Project

## Table of Contents
- [Getting Started](#getting-started)

#### Getting Started
The stack consists of Angular (using ngx-leaflet for all map purposes), Express, and MySQL.

The project can be run entirely through docker, so a simple docker-compose up would work.
In order to run the components individually, the individual docker files are enough. If it's desired 
to run the individual components without docker, the appropriate README's have instructions.

Use this to build an individual dockerfile in its individual directory where name is the name of the image.

`docker build -t name .`

Then we can issue this command to run the individual file with the appropriate ports

`docker run -dp PORT:PORT name`

Look here for further resources on [docker](https://docs.docker.com/get-started/)


