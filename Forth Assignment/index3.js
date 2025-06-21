let count = 0;

// Start interval
const loadingInterval = setInterval(() => {
  console.log("Loading...");
  count++;

  if (count === 5) {
    clearInterval(loadingInterval);
    console.log("Loaded successfully!");
  }
}, 1000); // 1000 ms = 1 second
