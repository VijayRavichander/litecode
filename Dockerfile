FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml first to leverage Docker cache
COPY package.json pnpm-lock.yaml ./

# Install global dependencies
RUN npm install -g pnpm pm2

# Install dependencies
RUN pnpm install

# Copy the entire monorepo into the container
COPY . .

# Generate Prisma client
RUN cd packages/db && pnpm dlx prisma generate

# Ensure all necessary dependencies are installed in the web-hook and web-dev directories
RUN cd apps/web-hook && pnpm install
RUN cd apps/web && pnpm install

# Expose ports for both applications
EXPOSE 3001
EXPOSE 3003
EXPOSE 3005
EXPOSE 5444

# Command to start both services using pm2
CMD ["pm2-runtime", "start", "processes.json"]