// Simulate API data fetching with 50% success/failure
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // true or false randomly

      if (isSuccess) {
        resolve("Fetched data successfully!");
      } else {
        reject("Server error or network issue.");
      }
    }, 1000); // 1 second delay
  });
}

// Async function to handle the fetch result
async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

// ✅ Trigger the simulation
fetchDataHandler();
