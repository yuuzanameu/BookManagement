# 📚 Bookstore REST API

A simple RESTful API for managing a bookstore. Built with **Node.js** and **Express**, the API supports user authentication, CRUD operations for books, and stores data in a local JSON file instead of using a database.

---

## 🔧 Features

- ✅ User Registration and Login with JWT Authentication
- ✅ Token-based access control for protected routes
- ✅ CRUD operations for managing books:
  - Create a book
  - View all books (per user)
  - View a book by ID
  - Update a book by ID
  - Delete a book by ID
- ✅ File-based persistence (books stored in a JSON file)

---

## 📦 Technologies Used

- **Node.js**
- **Express.js**
- **UUID** – for generating unique book IDs
- **bcrypt** – for password hashing
- **jsonwebtoken (JWT)** – for user auth
- **fs (File System)** – for reading/writing JSON files

---
