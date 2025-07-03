import { Request, Response } from "express";
import { loadBooks } from "../../utils/fileUtils.js";

export async function getBookById(req: Request, res: Response) {
    try {
        const { userId } = req.userdata;
        const { id } = req.params;

        const books = await loadBooks();
        const book = books.find(
            (book) => book.id === id && book.userId === userId,
        );

        if (!book) {
            res.status(404).json({ error: "Book not found" });
            return;
        }

        res.status(200).json({
            message: "Book retrieved successfully",
            book: book,
        });
    } catch (error) {
        console.log("Couldn't get book: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

