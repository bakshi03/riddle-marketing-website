# ---- Build stage: compile the Astro site to static files ----
# Use the Debian-based (glibc) image, not Alpine: npm has a bug installing
# rollup's platform-specific binary on musl (Alpine), which breaks `astro build`.
FROM node:20-slim AS build
WORKDIR /app

# Install dependencies against the lockfile for reproducible builds.
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Build the static site into /app/dist.
COPY . .
ARG PUBLIC_GTM_ID
ARG PUBLIC_GA4_ID
RUN npm run build

# ---- Runtime stage: serve the static files with nginx ----
FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
# Force IPv4 (127.0.0.1): nginx listens on IPv4 only, and "localhost" can
# resolve to IPv6 ::1 first, which busybox wget won't fall back from.
HEALTHCHECK --interval=15s --timeout=5s --start-period=5s --retries=5 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
