# Use the specified base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the entire monorepo into the container
COPY . .

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install 

# Expose ports for both applications
EXPOSE 3001
EXPOSE 3003

# Command to start both services
CMD ["npm", "run", "dev"]
