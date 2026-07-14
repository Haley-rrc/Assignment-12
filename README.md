# Assignment 13 - UI Component Library Build Checks

This project is based onAssignment 12

For Assignment 13, I added code quality checks to the existing build process. The project uses Prettier, ESLint, tests, Husky, GitHub Actions, Docker, and Nginx.

## Project Requirements

The project uses these assignment values:

Container name: jiang_haley_coding_assignment13
Working directory: /jiang_haley_ui_garden_build_checks
Localhost port: 8018

## Install the Project

Make sure Node.js, npm, Git, and Docker Desktop are installed.

Open a terminal in the project folder and install the dependencies:

npm install --legacy-peer-deps

## Run the Development Application

npm start

## Run Storybook

npm run storybook

## Run Prettier

Check the formatting:

npm run format:check

Automatically fix the formatting:

npm run format

## Run ESLint

npm run lint

## Run Tests

npm run test:ci

## Run All Code Quality Checks

npm run quality

The quality command runs:

1. Prettier
2. ESLint
3. All tests

If one check fails, the process stops.

## Husky Pre-commit Check

Husky runs the quality command before a Git commit is accepted:

npm run quality

Example:

git add .
git commit -m "Update project"

If Prettier, ESLint, or any test fails, the commit is stopped.

## Build the Docker Image

Make sure Docker Desktop is running.

Run this command from the project folder:

docker build -t jiang_haley_assignment13 .

The Dockerfile runs the quality checks, creates a production build, and uses Nginx to host the final application.

## Run the Docker Container

Create the container with the required name and port:

docker run -d --name jiang_haley_coding_assignment13 -p 8018:80 jiang_haley_assignment13

Open at:

http://localhost:8018

## Check the Running Container

docker ps

The result should show the container name and port mapping:

jiang_haley_coding_assignment13
8018 -> 80

## Stop the Container

docker stop jiang_haley_coding_assignment13

## Start the Container Again

docker start jiang_haley_coding_assignment13

## Remove the Container

docker rm -f jiang_haley_coding_assignment13
