function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

// Create an object with name and age
const person = {
  name: "Alice",
  age: 25
};

// Use call() to run personInfo in the context of 'person'
personInfo.call(person);
