#!/bin/bash

cd frontend
npm install
npm start
cd ../backend
npm install
docker-compose up
sequelize db:migrate
sequelize db:seed:all
npm start