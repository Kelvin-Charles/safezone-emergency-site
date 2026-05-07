# Stage 1: Build the React app
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine
# Copy the build output to replace the default nginx contents
#COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html
# If using React Router, you'll need a custom nginx config to handle client-side routing
# COPY nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 8678
CMD ["nginx", "-g", "daemon off;"]
