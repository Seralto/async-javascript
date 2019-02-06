function getUser(id, callback) {
  console.log('Getting user...');
  setTimeout(() => {
    callback({
      id: id,
      username: 'Seralto'
    });
  }, 2000);
}

function getPosts(username, callback) {
  console.log(`\nGetting posts from ${username}...`);
  setTimeout(() => {
    callback(['First Post', 'Second Post']);
  }, 2000);
}

function getComments(post, callback) {
  console.log(`\nGetting comments from post ${post}...`);
  setTimeout(() => {
    callback(['comment1']);
  }, 2000);
}

// Callback Hell!
getUser(1, (user) => {
  console.log(user);
  getPosts(user.username, (posts) => {
    console.log(posts);
    getComments(posts[0], (comments) => {
      console.log(comments);
    });
  });
});
