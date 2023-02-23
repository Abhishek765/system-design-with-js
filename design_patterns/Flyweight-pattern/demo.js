// ! Reuse existing instances when working with identical objects

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const books = new Set();
const booksList = [];

// if book is already present in the collection then return it otherwise add a new book
const createBook = (title, author, isbn) => {
  const existingBook = books.has(isbn);

  if (existingBook) {
    return existingBook;
  }
  const newBook = new Book(title, author, isbn);
  books.add(isbn);
  return newBook;
};

// function to add the book to the booksList
const addBook = (title, author, isbn, availibility, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    availibility,
    sales,
  };

  booksList.push(book);
};

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

console.log(`Total amount of Books: ${books.size}`);
console.log(`Total amount of copies: ${booksList.length}`);
