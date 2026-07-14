# Use Node to build the React app
FROM node:20-alpine AS build

# Set the working folder required by the assignment
WORKDIR /jiang_haley_ui_garden

# Copy package files first
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the React production files
RUN npm run build

# Use nginx to host the production build
FROM nginx:alpine

# Copy React build files to nginx html folder
COPY --from=build /jiang_haley_ui_garden/build /usr/share/nginx/html

# nginx runs on port 80 inside the container
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]