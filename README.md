# 📚 Bookstore REST API

<p align="center">
  <img src="[https://img.shields.io/badge/Node.js-v18+-6DA55F?style=for-the-badge&logo=node.js&logoColor=white](https://img.shields.io/badge/Node.js-v18+-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)" alt="Node.js" />
  <img src="[https://img.shields.io/badge/Express.js-4.x-FFB6C1?style=for-the-badge&logo=express&logoColor=black](https://img.shields.io/badge/Express.js-4.x-FFB6C1?style=for-the-badge&logo=express&logoColor=black)" alt="Express" />
  <img src="[https://img.shields.io/badge/REST_API-CRUD-A7BCBD?style=for-the-badge](https://img.shields.io/badge/REST_API-CRUD-A7BCBD?style=for-the-badge)" alt="REST API" />
  <img src="[https://img.shields.io/badge/License-MIT-E6748E?style=for-the-badge](https://img.shields.io/badge/License-MIT-E6748E?style=for-the-badge)" alt="License" />
</p>

A lightweight RESTful API built with **Node.js** and **Express.js** to handle complete CRUD (Create, Read, Update, Delete) operations on an in-memory collection of books.

---

## 📁 Project Directory Structure

```text
bookstore-rest-api/
├── node_modules/       # Project dependencies
├── package.json        # Node.js project metadata and scripts
├── package-lock.json   # Dependency lock file
├── server.js           # Main Express server and API routes
└── README.md           # Project documentation
```

---

## 🌟 Features

- 📖 **Retrieve Books:** Fetch all books or lookup a specific book by ID.
- ➕ **Add Book:** Create new book records with auto-incrementing IDs.
- ✏️ **Update Book:** Modify existing book details by ID.
- 🗑️ **Delete Book:** Remove books from the collection easily.
- 🛡️ **Middleware & Validation:** Includes JSON parsing, CORS, bad request handling, and error middleware.

---

## 🛠️ Tech Stack & Tools

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Middleware:** `cors`, `express.json()`
- **Testing:** Postman / cURL
- **Version Control:** Git & GitHub

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/bookstore-rest-api.git
   cd bookstore-rest-api
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Server**
   - For development (with auto-reload):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

4. **Verify Endpoint**
   Open `http://localhost:3000` in your browser or Postman.

---

## 📌 API Endpoints Overview[span_14](start_span)[span_14](end_span)

| Method | Endpoint | Description | Request Body Example |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Root API overview & status | *None* |
| `GET` | `/books` | Retrieve all stored books | *None* |
| `GET` | `/books/:id` | Get details of a single book by ID | *None* |
| `POST` | `/books` | Create a new book record | `{"title": "Book Title", "author": "Author Name"}` |
| `PUT` | `/books/:id` | Update an existing book by ID[
| `{"title": "Updated Title"}` |
| `DELETE`| `/books/:id` | Delete a book by ID | *None* |

---

## 🧪 Testing with Postman & Sample Payloads

### 1. `GET /books`
- **Method:** `GET`
- **URL:** `http://localhost:3000/books`
- **Response `200 OK`:**
  ```json
  {
    "success": true,
    "count": 3,
    "data": [
      { "id": 1, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },
      { "id": 2, "title": "To Kill a Mockingbird", "author": "Harper Lee" },
      { "id": 3, "title": "1984", "author": "George Orwell" }
    ]
  }
  ```

### 2. `POST /books`
- **Method:** `POST`
- **URL:** `http://localhost:3000/books`
- **Header:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "title": "Norwegian Wood",
    "author": "Haruki Murakami"
  }
  ```
- **Response `201 Created`:**
  ```json
  {
    "success": true,
    "message": "Book added successfully! ✨",
    "data": {
      "id": 4,
      "title": "Norwegian Wood",
      "author": "Haruki Murakami"
    }
  }
  ```

### 3. `PUT /books/1`
- **Method:** `PUT`
- **URL:** `http://localhost:3000/books/1`
- **Body:**
  ```json
  {
    "title": "The Great Gatsby (Special Edition)"
  }
  ```

### 4. `DELETE /books/2`
- **Method:** `DELETE`
- **URL:** `http://localhost:3000/books/2`
  
---

<p align="center">
  Crafted with ✨ for Elevate Labs Web Development Internship
</p>

