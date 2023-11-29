const axios = require('axios');

const fetchUsersWithPosts = async () => {
  try {
    console.log('Fetching data...')
    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = usersResponse.data;

    const usersWithPosts = await Promise.all(
      users.map(async (user) => {
        const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
        const posts = postsResponse.data;
        return { ...user, posts };
      })
    );

    return usersWithPosts;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


fetchUsersWithPosts()
  .then((usersWithPosts) => console.log(usersWithPosts))
  .catch((error) => console.error(error));
