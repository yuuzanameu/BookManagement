type User = {
    id: string;
    email: string;
    password: string;
    createdAt: string;
};

type Book = {
    id: string;
    title: string;
    author: string;
    genre: string;
    publishedYear: Number;
    userId: string;
};

type InputBook = {
    title: string;
    author: string;
    genre: string;
    publishedYear: Number;
};

type Token_payload = {
    userId: string;
    email: string;
};

declare namespace Express {
    export interface Request {
        userdata: Token_payload;
    }
}

