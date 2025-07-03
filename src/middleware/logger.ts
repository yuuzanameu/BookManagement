import winston from "winston";
import { Request, Response, NextFunction } from "express";
import path from "path";

const logger = winston.createLogger({
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({
            filename: path.join(process.cwd(), "logs", "requests.log"),
        }),
        new winston.transports.Console(),
    ],
});

export function loggingMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    logger.info(`${req.method} ${req.url}`);
    next();
}

