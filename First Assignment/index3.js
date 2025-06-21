const checkout = {
    items: [],
    total: 0,
  
    addItem(item) {
      let price = item.price;
  
      // Try to coerce string to number if possible
      if (typeof price === 'string') {
        price = parseFloat(price);
      }
  
      // Final type validation
      if (typeof price !== 'number' || isNaN(price)) {
        console.log(`❌ Invalid price for item: "${item.name}"`);
        return;
      }
  
      this.items.push({ ...item, price }); // Add coerced price
      this.total += price;
  
      console.log(`✅ Added item: ${item.name}, Price: ₹${price.toFixed(2)}`);
    },
  
    getTotal() {
      return `Total: ₹${this.total.toFixed(2)}`;
    }
  };
  
  //  Testing
  checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // Valid string price
  checkout.addItem({ name: "Milk", price: 3.50 });            // Valid number price
  checkout.addItem({ name: "Invalid Item", price: "abc" });   // Invalid
  
  console.log(checkout.getTotal());  // Output: Total: ₹103.45
  