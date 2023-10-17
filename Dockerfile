# Dockerfile
# NodeJS and Alpine image
FROM node:20-alpine3.18

# Set the working directory
WORKDIR /app

# Copy the app files to the container
COPY . /app

# Expose the port the app runs
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
