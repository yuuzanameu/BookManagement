import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const JWT_ACCESS = process.env.ACCESS_SECRET || "my-secret-key";

export function authenticateToken(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        res.status(401).json({ error: "Please login first" });
        return;
    }

    jwt.verify(token, JWT_ACCESS, (err: any, userdata) => {
        if (err || !userdata) {
            res.status(403).json({ error: "Invalid or expired token" });
            return;
        }
        req.userdata = userdata as Token_payload;
        next();
    });
}

