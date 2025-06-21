function outerFunction() {
  const message = "Hello from the closure!";

  function innerFunction() {
    console.log(message); // This accesses 'message' from outerFunction
  }

  return innerFunction; // Return inner function
}

// Using the closure
const closureFunc = outerFunction(); // outerFunction runs and returns innerFunction
closureFunc(); // logs: "Hello from the closure!"
