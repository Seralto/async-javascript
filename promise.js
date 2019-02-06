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

getUser(1)
  .then(user => {
    console.log(user);
    return getPosts(user.username);
  })
  .then(posts => {
    console.log(posts);
    return getComments(posts[0])
  })
  .then(comments => console.log(comments))
  .catch(err => console.log('Error', err.message));
