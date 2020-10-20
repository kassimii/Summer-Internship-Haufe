# Step 1: Build with Node.js
FROM node:12 AS builder

# Make project directory
RUN mkdir /project
WORKDIR /project

# Copy folders

# Copy files
COPY package.json package.json


COPY public public

# Build application
RUN npm install

#Copy sources
COPY src src
RUN npm run build

# Setp 2: Deliver the dist folder with Nginx
FROM nginx:1.15-alpine

# Copy Nginx configuration for the application
COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy the Vue.js build output to the Nginx site directory

COPY --from=builder /project/build /usr/share/nginx/html
