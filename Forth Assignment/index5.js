function taskOne() {
  console.log("Task 1 completed");
}

function taskTwo(callback) {
  console.log("Task 2 completed");
  callback(); // call the passed function after taskTwo finishes
}

// Call taskTwo and pass taskOne as the callback
taskTwo(taskOne);
