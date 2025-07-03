import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_REFRESH = process.env.REFRESH_SECRET || "my-secret-key";
const JWT_ACCESS = process.env.ACCESS_SECRET || "my-secret-key";

export function refresh(req: Request, res: Response) {
    const { refresh_token } = req.body;

    if (!refresh_token) {
        res.status(401).json({ error: "Please login first" });
        return;
    }

    jwt.verify(refresh_token, JWT_REFRESH, (err: any, userdata: any) => {
        if (err || !userdata) {
            res.status(403).json({
                error: "Invalid or expired refresh token",
            });
            return;
        }
        const data = userdata as Token_payload;
        const accessToken = jwt.sign(
            { userId: data.userId, email: data.email },
            JWT_ACCESS,
            {
                expiresIn: "30min",
            },
        );

        res.status(200).json({
            message: "New Access token generated",
            accessToken,
            user: { id: data.userId, email: data.email },
        });
        return;
    });
}

