function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Example input
const original = {
  name: "Alice",
  hobbies: ["reading", "traveling"]
};

// Create a deep clone
const clone = deepClone(original);

// Modify the clone
clone.hobbies.push("coding");

// Output both to verify
console.log("Original:", original);
console.log("Clone:", clone);
