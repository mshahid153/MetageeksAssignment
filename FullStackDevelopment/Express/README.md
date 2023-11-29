# Express.js Blog API

This is a simple Express.js application that includes a middleware for logging incoming requests and a route for retrieving a list of posts from a SQLite database.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Middleware](#middleware)
- [Routes](#routes)

## Features

- Middleware for logging timestamp and requested URL for every incoming request.
- Route to retrieve a list of posts from a SQLite database and return it as JSON.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Install Dependencies:**

    ```bash
    npm install
    ```

2. **Start the Application:**

    ```bash
    node index.js
    ```

    The server will be running on [http://localhost:3005](http://localhost:3005).

## Middleware

The application includes a middleware that logs the timestamp and requested URL for every incoming request. This middleware is defined in `index.js`.

## Routes

### Retrieve Posts

- **Endpoint:** `/posts`
- **Method:** GET
- **Description:** Retrieves a list of posts from the database and returns it as JSON.

Example:

```bash
curl http://localhost:3005/posts
