import { check_semantics, loadUsers } from "../utils/fileUtils.js";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_ACCESS = process.env.ACCESS_SECRET || "my-secret-key";
const JWT_REFRESH = process.env.REFRESH_SECRET || "my-secret-key";

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const { error } = check_semantics(email, password);
        if (error) {
            res.status(400).json({ error });
            return;
        }

        const users = await loadUsers();
        const user = users.find((user) => user.email === email);

        if (!user) {
            res.status(401).json({ error: "Email not registered" });
            return;
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            res.status(401).json({ error: "password and email don't match" });
            return;
        }

        const data: Token_payload = { userId: user.id, email: user.email };
        const accessToken = jwt.sign(data, JWT_ACCESS, { expiresIn: "30min" });
        const refreshToken = jwt.sign(data, JWT_REFRESH, { expiresIn: "7d" });

        res.status(200).json({
            message: "Login successful",
            accessToken,
            refreshToken,
            user: { id: user.id, email: user.email },
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

