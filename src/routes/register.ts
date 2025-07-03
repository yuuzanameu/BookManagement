import { check_semantics, loadUsers, saveUsers } from "../utils/fileUtils.js";
import bcrypt from "bcrypt";
import { v4 as uuid4 } from "uuid";
import { Request, Response } from "express";

export async function register(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        const { error } = check_semantics(email, password);
        if (error) {
            res.status(400).json({ error });
        }

        const users: User[] = await loadUsers();
        if (users.find((user) => user.email === email)) {
            res.status(409).json({ error: "User already exists" });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser: User = {
            id: uuid4(),
            email,
            password: hashedPassword,
            createdAt: new Date().toISOString(),
        };

        users.push(newUser);
        await saveUsers(users);

        res.status(201).json({
            message: "User registered successfully",
            user: { id: newUser.id, email: newUser.email },
        });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

