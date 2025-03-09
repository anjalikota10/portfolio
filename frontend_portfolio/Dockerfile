FROM node:18-alpine AS build

WORKDIR /app

# Copy only essential files first
COPY package.json package-lock.json ./
RUN npm install

# Copy remaining files explicitly
COPY src ./src
COPY public ./public

# Build the React app
RUN npm run build

# Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

