import { Request, Response } from "express";
import { loadBooks, saveBooks } from "../../utils/fileUtils.js";
import { v4 as uuid4 } from "uuid";

export async function addBook(req: Request, res: Response) {
    try {
        const { userId } = req.userdata;

        const bookData: InputBook = req.body;

        const { title, author, genre, publishedYear } = bookData;
        if (!title || !author || !genre || !publishedYear) {
            res.status(400).json({ error: "All fields are required" });
            return;
        }

        const bookEntry: Book = {
            ...bookData,
            id: uuid4(),
            userId,
        };
        const books = await loadBooks();
        books.push(bookEntry);
        await saveBooks(books);

        res.status(201).json({
            message: "Book added successfully",
            book: bookEntry,
        });
    } catch (error) {
        console.log("Couldn't add book: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

