# Fetch Users with Posts

This function fetches data from an external API (e.g., JSONPlaceholder) and returns a list of users along with their posts.

## Usage

To use the `fetchUsersWithPosts` function, follow these steps:

1. **Install Dependencies:**
    ```bash
    npm install axios
    ```
    This ensures that the Axios library, used for making HTTP requests, is installed.

2. **Run the Code:**
    ```bash
    node index.js
    ```
    Replace `index.js` with the name of the file where you've placed the provided code.

3. **View Results:**
    The function will log the list of users along with their posts to the console.

## Code Explanation

The `fetchUsersWithPosts` function uses the Axios library to make asynchronous HTTP requests to the JSONPlaceholder API. It retrieves a list of users and, for each user, fetches their posts. The function returns an array of objects, where each object represents a user with associated posts.
