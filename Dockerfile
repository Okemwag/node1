# Use the official Node.js 18 image as the base
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the app port (default is 3000)
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
