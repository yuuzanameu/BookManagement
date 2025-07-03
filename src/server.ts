// import "dotenv/config";
import express from "express";
import cors from "cors";
import { register } from "./routes/register.js";
import { login } from "./routes/login.js";
import { addBook } from "./routes/books/post_books.js";
import { authenticateToken } from "./middleware/auth.js";
import { listBooks } from "./routes/books/get_books.js";
import { getBookById } from "./routes/books/get_book_by_id.js";
import { deleteBook } from "./routes/books/delete_book_by_id.js";
import { updateBook } from "./routes/books/update_book_by_id.js";
import { refresh } from "./routes/refresh.js";

const app = express();
app.use(cors());
app.use(express.json());

// AUTHENTICATION ROUTES
app.post("/register", register);

app.post("/login", login);

app.post("/refresh", refresh);

// BOOK MANAGEMENT ROUTES
app.post("/books", authenticateToken, addBook);

app.get("/books", authenticateToken, listBooks);

app.get("/books/:id", authenticateToken, getBookById);

app.delete("/books/:id", authenticateToken, deleteBook);

app.put("/books/:id", authenticateToken, updateBook);

app.listen(5000, () => {
    console.log("server is running at 5000");
});

