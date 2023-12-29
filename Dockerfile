# Use a Node.js base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY ./ ./

# Install dependencies
RUN yarn install

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["yarn", "dev"]
