FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build the application
COPY . .
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

# We need only the built output and production dependencies
# Since esbuild bundles server.cjs, we can just copy dist/ and install external packages
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 3000

ENV NODE_ENV=production

# Start the built server
CMD ["npm", "start"]
