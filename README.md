# ReactJS Developer Coding Challenge

## Prerequisites

### Frontend

Before you start working on the frontend part of the coding challenge, please make sure you have the following installed on your system:

- Node.js (version 14 or later)
- npm (version 6 or later)
- Git

You will also need a code editor of your choice, such as Visual Studio Code or Sublime Text.

### Backend

Before you start working on the backend part of the coding challenge, please make sure you have the following installed on your system:

- Node.js (version 14 or later)
- npm (version 6 or later)
- Git
- Redis (should be running when you start the project)

You will also need a code editor of your choice, such as Visual Studio Code or Sublime Text.


## Task 1: Create a Landing Page

### Challenge Description

In the `frontend` directory, you will find a set of assets and a Figma design file that represents a landing page. Your first task is to create a responsive landing page that follows the provided design using Bootstrap.
Figma file: https://www.figma.com/file/4tIc6oxGmDLdpnGvHn0EgJ/Reactjs-Test?node-id=0%3A1&t=BBNZcDsqGm3ZQ58m-1

### Requirements

- The page should be responsive and work well on smaller devices.
- You can use your own creativity to complete the missing sections like footer and icons in "Need help?" section.

## Task 2: Work with Backend API

### Challenge Description

In this task, you will work with the provided backend project in the `backend` directory. Please read the README file in the backend directory to successfully run the project.

### Requirements

- The backend project has one endpoint `http://localhost:3001/v1/currencies` which will return the data that will be used in the "Popular Cryptocurrencies" table of the landing page.
- You can render the whole page after the endpoint returns the information, or you can render the page and render the table separately once you receive the response.

## Task 3: Implement Websockets

### Challenge Description

This task will test your knowledge of websockets.

### Requirements

- You will connect to `ws://localhost:3333/currency` which will return you the updated prices of cryptocurrencies every 5 seconds that you will render in the "Popular Cryptocurrencies" table.

## Submission

When you have completed the coding challenge, please push your changes to your forked repository and send us the link to your repository. We will review your submission and get back to you as soon as possible.
