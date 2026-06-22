# Assignment 12: Web Component Library

## Project Name
jiang_haley_ui_garden
## Container Name
jiang_haley_coding_assignment12

each folder have
ComponentName.tsx
ComponentName.stories.tsx
ComponentName.types.tsx
ComponentName.tests.tsx
ComponentName.test.tsx
(for test only)
index.ts


The components include a default state and a disabled state. When disabled, the component changes color and the cursor shows that the user cannot click it.


## Run the Project Locally Without Docker

Install dependencies:

npm install

Start the React app:

npm start


Open the app in the browser:

http://localhost:3000

## Run Storybook Locally

Start Storybook:

npm run storybook

Open Storybook in the browser:

http://localhost:6006

## Run Tests

Run all tests:

npm test

Press:

a

This runs all test files.

Each component has at least two tests:

1. A test that checks if the component is visible.
2. A test that checks if the background color changes when the component is disabled.

## Build the React App

Create the production build:

npm run build

## Run the Project With Docker

Make sure Docker Desktop is running first.

Build the Docker image:

docker build -t jiang_haley_ui_garden .

Create and run the container:

docker run --name jiang_haley_coding_assignment12 -d -p 8083:80 jiang_haley_ui_garden

Open the site in the browser:

http://localhost:8083

## Stop the Docker Container

Stop the container:

docker stop jiang_haley_coding_assignment12

Remove the container:

docker rm jiang_haley_coding_assignment12

## Rebuild the Docker Container

If the code changes, rebuild the image:

docker build -t jiang_haley_ui_garden .

Run the container again:

docker run --name jiang_haley_coding_assignment12 -d -p 8083:80 jiang_haley_ui_garden

## Steps

1. Created a React TypeScript project named `jiang_haley_ui_garden`.

2. Installed Storybook for showing UI components.

3. Installed styled-components for component styling.

4. Installed testing tools for checking styled-components CSS.

5. Created a `components` folder inside `src`.

6. Created component folders for the UI component library.

7. Added TypeScript props files for component properties.

8. Added styled-components CSS inside each component.

9. Added Storybook stories with controls for text, background color, and disabled state.

10. Added tests to check visibility and disabled background color.

11. Created a Dockerfile to host the React production build.

12. Created this README with instructions for running the project on port `8083`.
