import winston from "winston";
import { Request } from "express";
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

export function logRequest(req: Request) {
    logger.info(`${req.method} ${req.url}`);
}

