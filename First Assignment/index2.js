
const library = {
    books: [
      { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
    ],
  
    // Add a book only if all fields are present and valid
    addBook(book) {
      const { title, author, year } = book;
  
      // Validate input types and presence
      if (
        typeof title !== "string" || title.trim() === "" ||
        typeof author !== "string" || author.trim() === "" ||
        typeof year !== "number" || year <= 0
      ) {
        console.log("❌ Book information is incomplete or invalid.");
        return false;
      }
  
      // Prevent duplicate titles
      const exists = this.books.some(b => b.title === title);
      if (exists) {
        console.log(`⚠️ A book with title "${title}" already exists.`);
        return false;
      }
  
      this.books.push({ title: title.trim(), author: author.trim(), year });
      console.log(`✅ Book "${title}" added successfully.`);
      return true;
    },
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    },
  
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
      if (index !== -1) {
        const removed = this.books.splice(index, 1);
        console.log(`🗑️ Book "${title}" removed.`);
        return removed[0];
      } else {
        console.log("⚠️ Book not found.");
        return null;
      }
    }
  };
  
  // 🔍 Testing the methods
  library.addBook({ author: "George Orwell", year: 1949 });         // Should NOT be added
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); // Should be added
  
  console.log("📚 Total books in library:", library.books.length);
  
  // Output current library
  console.log("Library:", library.books);
  