# 📚 Bookstore REST API

A simple RESTful API for managing a bookstore. Built with **Node.js** and **Express**, the API supports user authentication, CRUD operations for books, and stores data in a local JSON file instead of using a database.

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

## 📦 Technologies Used

- **Node.js**
- **Express.js**
- **UUID** – for generating unique book and user IDs
- **bcrypt** – for password hashing
- **jsonwebtoken (JWT)** – for user auth
- **fs (File System)** – for reading/writing JSON files

## 🔐 Authentication

- Users must register and login to access any book-related endpoints.
- Upon login, two **JWT token** are returned: access token and refresh token.
- This access token must be sent in the `Authorization` header as a Bearer token:
- When the access token is invalid or has expired, client can request new access
  token using the refresh token at the /refresh endpoint.

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/bookstore-api.git
cd bookstore-api
```

### 2. Install dependencies

```bash
npm install
````

### 3. Start the server

```bash
npm run build
npm run start
```

The server will run on:
```arduino
http://localhost:5000
```

## 🧪 Testing the API

You can use the bash scripts in `curl_test/` folder and edit in required details and chmod the scripts to run curl-based tests.

Or you can simply plug in the parameters from the curl command into the postman UI for different routes.




