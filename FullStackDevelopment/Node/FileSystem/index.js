const fs = require('fs');

const readUserData = () => {
  try {
    const data = fs.readFileSync('data.json', 'utf-8'); //Sample JSON data
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    process.exit(1);
  }
};

const manipulateJSONData = (userData) => {
  const modifiedUserData = userData.map((user) => {
    const totalPosts = user.posts.length;
    return { ...user, totalPosts };
  });
  return modifiedUserData;
};

const newJSONData = (modifiedUserData) => {
  try {
    const jsonString = JSON.stringify(modifiedUserData);
    fs.writeFileSync('output.json', jsonString);
    console.log('Created a new JSON file');
  } catch (error) {
    console.error('Error writing JSON file:', error);
    process.exit(1);
  }
};


const userData = readUserData();
const modifiedUserData = manipulateJSONData(userData);
newJSONData(modifiedUserData);
