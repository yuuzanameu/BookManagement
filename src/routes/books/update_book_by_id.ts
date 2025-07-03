import { Request, Response } from "express";
import { loadBooks, saveBooks } from "../../utils/fileUtils.js";

export async function updateBook(req: Request, res: Response) {
    try {
        const { userId } = req.userdata;
        const { title, author, genre, publishedYear } = req.body;
        const { id } = req.params;

        const books = await loadBooks();
        const bookIndex = books.findIndex(
            (book) => book.id === id && book.userId === userId,
        );
        if (bookIndex === -1) {
            res.status(404).json({
                error: "Book not found, couldnt update book",
            });
            return;
        }

        const book = books[bookIndex];
        books[bookIndex] = { ...book, title, author, genre, publishedYear };
        await saveBooks(books);

        res.status(201).json({
            message: "Book updated successfully",
        });
    } catch (error) {
        console.log("Couldn't update book by id: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

