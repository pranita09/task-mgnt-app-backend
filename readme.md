# Tasks Management Express MongoDB App

This is a simple backend application for managing tasks using Express.js and MongoDB. It provides several routes for performing basic task management operations(CRUD).

## Base URL

The base URL for this backend app is [https://organizely-nodejs-restapi.onrender.com](https://organizely-nodejs-restapi.onrender.com).

## Routes

- Read All Tasks
  - Endpoint: `/tasks`
  - Method: GET
- Create New Task
  - Endpoint: `/tasks`
  - Method: POST
- Update a Task
  - Endpoint: `/tasks/:taskId`
  - Method: POST
- Delete a task
  - Endpoint: `/tasks/:taskId`
  - Method: DELETE

## How to Use

To use this backend API, make HTTP requests to the provided endpoints using preferred method (e.g., Postman, cURL, or within application code) with the help of the base URL.
Make sure to replace :taskId in the endpoint URLs with the actual ID of the task that needs to update or delete. Make sure to pass the request body for create and update enpoints.

## Tech Stack Used

- Express JS
- Mongoose + MongoDB
- cors
- helmet
- nodemon
