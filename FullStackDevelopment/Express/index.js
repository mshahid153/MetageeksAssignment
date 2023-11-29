const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();

const db = new sqlite3.Database('data.db');

const middleware = (request, response, next) => {
  const timestamp = new Date().toUTCString();
  const requestedUrl = request.originalUrl;

  console.log(`[${timestamp}] Requested URL: ${requestedUrl}`);

  next();
};

app.use(middleware);

app.get('/posts', (request, response) => {
  const query = 'SELECT * FROM Post';

  db.all(query, (err, posts) => {
    if (err) {
      console.error('Error retrieving posts:', err);
      response.status(500).json({ error: 'Internal Server Error' });
    } else {
        const data = {
            posts: posts,
            result: 'Here, the list of posts will be displayed in JSON format'
          };
          response.json(data);
    }
  });
});

const port = 3005;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
