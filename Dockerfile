# Build the React production application
FROM node:20-alpine AS build

# Required assignment working directory
WORKDIR /jiang_haley_ui_garden_build_checks

# Copy dependency files first
COPY package.json package-lock.json ./

# Install dependencies for the existing CRA and Storybook project
RUN npm install

# Copy the project files
COPY . .

# Run Prettier, ESLint, and all tests
RUN npm run quality

# Create the production build
RUN npm run build

# Host the production build with Nginx
FROM nginx:alpine

# Keep the site files in the required directory
WORKDIR /jiang_haley_ui_garden_build_checks

# Copy the final React build
COPY --from=build /jiang_haley_ui_garden_build_checks/build ./

# Copy the site files to the Nginx website folder
RUN rm -rf /usr/share/nginx/html/* \
    && cp -r /jiang_haley_ui_garden_build_checks/* /usr/share/nginx/html/

# Nginx uses port 80 inside the container
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
