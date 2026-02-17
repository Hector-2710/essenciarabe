FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose Astro default port
EXPOSE 4321

# Run in development mode and bind to all interfaces
CMD ["npm", "run", "dev", "--", "--host"]
