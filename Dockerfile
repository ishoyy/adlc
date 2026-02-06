# syntax=docker/dockerfile:1
FROM node:20-bullseye AS builder
WORKDIR /app
ENV NODE_ENV=development
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM node:20-bullseye-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
RUN mkdir -p /data && chown -R node:node /data
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
USER node
EXPOSE 3000
VOLUME ["/data"]
CMD ["npm","run","start"]
