import { Request, Response } from "express";
import { loadBooks } from "../../utils/fileUtils.js";

export async function listBooks(req: Request, res: Response) {
    try {
        const { userId } = req.userdata;
        const books = await loadBooks();
        const usersBooks: Book[] = books.filter(
            (book) => book.userId === userId,
        );

        res.status(200).json({
            message: "Books retrieved successfully",
            books: usersBooks,
        });
    } catch (error) {
        console.log("Couldn't list books: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

