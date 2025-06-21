let student = {
  name: "Alice",
  age: 22,
  course: "Computer Science"
};

// Convert the object to a JSON string
let jsonString = JSON.stringify(student, null, 2);  // Pretty print with 2 spaces

// Log the JSON string
console.log(jsonString);
