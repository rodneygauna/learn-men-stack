# Dockerfile
# NodeJS and Alpine image
FROM node:20-alpine3.18
# MongoDB Community Edition image
FROM mongodb/mongodb-community-server

# Copy the app files to the container
COPY . /app

# Expose the port the app runs
EXPOSE 3000
