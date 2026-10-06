const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// In-Memory Data Store
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' }
];

// Root Endpoint
app.get('/', (req, res) => {
  res.json({
    message: '🌸 Welcome to the Bookstore REST API!',
    endpoints: {
      getAllBooks: 'GET /books',
      getBookById: 'GET /books/:id',
      addBook: 'POST /books',
      updateBook: 'PUT /books/:id',
      deleteBook: 'DELETE /books/:id'
    }
  });
});

// 1. GET /books - Retrieve all books
app.get('/books', (req, res) => {
  res.status(200).json({
    success: true,
    count: books.length,
    data: books
  });
});

// 2. GET /books/:id - Retrieve a single book by ID
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${bookId} not found.`
    });
  }

  res.status(200).json({
    success: true,
    data: book
  });
});

// 3. POST /books - Add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  // Validation
  if (!title || !author) {
    return res.status(400).json({
      success: false,
      message: 'Please provide both title and author for the book.'
    });
  }

  const newBook = {
    id: books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1,
    title,
    author
  };

  books.push(newBook);

  res.status(201).json({
    success: true,
    message: 'Book added successfully! ✨',
    data: newBook
  });
});

// 4. PUT /books/:id - Update an existing book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const { title, author } = req.body;

  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${bookId} not found.`
    });
  }

  if (!title && !author) {
    return res.status(400).json({
      success: false,
      message: 'Please provide at least a title or author to update.'
    });
  }

  // Update fields
  if (title) books[bookIndex].title = title;
  if (author) books[bookIndex].author = author;

  res.status(200).json({
    success: true,
    message: 'Book updated successfully! 🌷',
    data: books[bookIndex]
  });
});

// 5. DELETE /books/:id - Remove a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${bookId} not found.`
    });
  }

  const deletedBook = books.splice(bookIndex, 1);

  res.status(200).json({
    success: true,
    message: 'Book deleted successfully! 🎀',
    data: deletedBook[0]
  });
});

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found.'
  });
});

// Express Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: err.message
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🌸 Server running smoothly at http://localhost:${PORT}`);
});
        
