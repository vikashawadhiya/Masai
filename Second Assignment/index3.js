function createBankAccount(initialBalance) {
  let balance = initialBalance; // 🔒 Private variable

  return {
    deposit: function(amount) {
      if (typeof amount !== "number" || amount <= 0) {
        return "❌ Invalid deposit amount.";
      }
      balance += amount;
      return balance;
    },

    withdraw: function(amount) {
      if (typeof amount !== "number" || amount <= 0) {
        return "❌ Invalid withdrawal amount.";
      }
      if (amount > balance) {
        return "❌ Insufficient funds.";
      }
      balance -= amount;
      return balance;
    },

    getBalance: function() {
      return balance;
    }
  };
}

// ✅ RUNNING THE CODE TO SHOW OUTPUT:
const account = createBankAccount(100);

console.log("💰 After deposit 50:", account.deposit(50));     // Output: 150
console.log("💸 After withdrawal 30:", account.withdraw(30)); // Output: 120
console.log("📊 Current balance:", account.getBalance());     // Output: 120

// ❌ Trying to access private variable directly
console.log("🔒 Direct balance access:", account.balance);    // undefined
