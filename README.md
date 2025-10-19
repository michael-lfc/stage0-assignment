# Stage 0 Backend Assignment

## Overview
This is my Stage 0 Backend Wizard assignment. It is a RESTful API that returns my profile information along with a dynamic cat fact fetched from an external API.

## Live Endpoint
<!-- [https://stage0-assignment.onrender.com/me](https://stage0-assignment.onrender.com/me) -->

Render: https://stage0-assignment.onrender.com/me

Heroku: https://my-node-app-rm-3c3fb305cb14.herokuapp.com/me


## Features
- GET `/me` endpoint
- Returns JSON with:
  - status
  - user object (email, name, stack)
  - timestamp (current UTC time in ISO 8601 format)
  - fact (random cat fact from Cat Facts API)
- Dynamic timestamp updates on every request
- Fetches a new cat fact on every request

## Technologies Used
- Node.js
- Express
- Axios (for external API calls)
- Render (for hosting)

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/michael-lfc/stage0-assignment.git

2. Navigate into the project:

cd stage0-assignment

3. Install dependencies:

npm install

4. Create a .env file in the root directory with placeholders:

EMAIL=<your-email-here>
NAME=<your-full-name-here>
STACK=<your-backend-stack-here>
PORT=4000

5. Start the server:

npm start

6. Test the endpoint at:

http://localhost:4000/me


