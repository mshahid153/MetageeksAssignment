# User Data Manipulation Script

This script reads a JSON file containing user data, manipulates the data to include the total number of posts each user has created, and writes the modified data back to a new JSON file.

## Usage

1. **Install Dependencies:**
    ```bash
    npm install
    ```
    This ensures that the necessary dependencies are installed.

2. **Run the Script:**
    ```bash
    node index.js
    ```
    Replace `index.js` with the name of the file where you've placed the provided code.

3. **View Results:**
    The script will create a new JSON file (`output.json`) with the modified user data, including the total number of posts each user has created.

## Code Explanation

The script consists of three main functions:

### `readUserData`
Reads the user data from a JSON file ('data.json').

### `manipulateJSONData`
Manipulates the user data to include the total number of posts each user has created.

### `newJSONData`
Writes the modified user data to a new JSON file ('output.json').

