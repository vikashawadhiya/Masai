const userProfile = {
    name: "Alice",
    age: 28,
  
    // Using modern concise method syntax
    details() {
      return `${this.name} is ${this.age} years old.`;
    },
  
    updateAge(newAge) {
      if (typeof newAge !== "number" || newAge <= 0) {
        console.log("❌ Invalid age.");
        return;
      }
  
      this.age = newAge;
      console.log("✅ Age updated.");
      console.log(this.details()); // Correct function call
    }
  };
  
  // 🧪 Test
  userProfile.updateAge(30);
  console.log(userProfile.details()); // Output: "Alice is 30 years old."
  