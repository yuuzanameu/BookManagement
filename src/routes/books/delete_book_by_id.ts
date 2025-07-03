import { Request, Response } from "express";
import { loadBooks, saveBooks } from "../../utils/fileUtils.js";

export async function deleteBook(req: Request, res: Response) {
    try {
        const { userId } = req.userdata;
        const { id } = req.params;

        const books = await loadBooks();
        const bookIndex = books.findIndex(
            (book) => book.id === id && book.userId === userId,
        );

        if (bookIndex === -1) {
            res.status(404).json({ error: "Book not found, delete failed" });
            return;
        }

        books.splice(bookIndex, 1);
        await saveBooks(books);

        res.status(200).json({
            message: "Book deleted successfully",
        });
    } catch (error) {
        console.log("Couldn't delete book: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

