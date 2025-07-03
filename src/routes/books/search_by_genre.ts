import { Request, Response } from "express";
import { loadBooks } from "../../utils/fileUtils.js";

export async function searchBooks(req: Request, res: Response) {
    try {
        const { userId } = req.userdata;
        const { genre } = req.query;

        if (!genre) {
            res.status(400).json({ error: "Genre parameter is required" });
            return;
        }

        const books = await loadBooks();
        const filteredBooks = books.filter(
            (book) =>
                book.userId === userId &&
                book.genre.toLowerCase() === (genre as string).toLowerCase(),
        );
        if (filteredBooks.length === 0) {
            res.status(400).json({
                error: "no book of specified genre was found",
            });
            return;
        }
        res.status(200).json(filteredBooks);
        return;
    } catch (error) {
        console.log("Couldn't search books: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

