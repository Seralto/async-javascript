function getUser(id) {
  console.log('Getting user...');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: id,
        username: 'Seralto'
      });
    });
  }, 2000);
}

function getPosts(username) {
  console.log(`\nGetting posts from ${username}...`);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['First Post', 'Second Post']);
    }, 2000);
  });
}

function getComments(post) {
  console.log(`\nGetting comments from post ${post}...`);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['comment1'])
    }, 2000);
  });
}

async function displayUserData() {
  try {
    const user = await getUser(1);
    console.log(user);

    const posts = await getPosts(user.username);
    console.log(posts);

    const commits = await getComments(posts[0]);
    console.log(commits);
  }
  catch(err) {
    console.log('Error', err.message)
  }
}
displayUserData();
