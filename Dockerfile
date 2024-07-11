# Use the specified base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the entire monorepo into the container
COPY . .


# Install dependencies
RUN npm install -g pnpm pm2
RUN pnpm install 
RUN cd packages/db && pnpm dlx prisma generate
RUN cd apps/web-hook && npm i 


# Expose ports for both applications
EXPOSE 3001
EXPOSE 3003
EXPOSE 3005
EXPOSE 5444

# Command to start both services using pm2
CMD ["pm2-runtime", "start", "processes.json"]