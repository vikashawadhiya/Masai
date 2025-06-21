function fetchUserData(callback) {
  console.log("Fetching user data...");
  setTimeout(() => {
    callback("User data received");
  }, 1000); // 1 second delay
}

function fetchUserPosts(callback) {
  console.log("Fetching user posts...");
  setTimeout(() => {
    callback("User posts received");
  }, 1500); // 1.5 second delay
}

// Start the nested callback sequence
fetchUserData((userData) => {
  console.log(userData);

  fetchUserPosts((userPosts) => {
    console.log(userPosts);
    console.log("All data loaded successfully!");
  });
});
