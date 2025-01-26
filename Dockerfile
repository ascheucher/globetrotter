FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy application files
COPY . .

# Build the application
RUN pnpm build

# Expose port
EXPOSE 4321

# Start the application
CMD ["pnpm", "preview", "--host"]
