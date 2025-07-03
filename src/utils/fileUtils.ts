import fs from "fs/promises";
import path from "path";

async function load(itemType: string) {
    try {
        const data = await fs.readFile(
            path.join(process.cwd(), "data", `${itemType}.json`),
            "utf8",
        );
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

async function save(itemType: string, items: User[] | Book[]) {
    await fs.mkdir(path.join(process.cwd(), "data"), { recursive: true });
    await fs.writeFile(
        path.join(process.cwd(), "data", `${itemType}.json`),
        JSON.stringify(items, null, 2),
    );
}

export async function loadUsers(): Promise<User[]> {
    return load("users");
}

export async function loadBooks(): Promise<Book[]> {
    return load("books");
}

export async function saveUsers(items: User[]) {
    return save("users", items);
}

export async function saveBooks(items: Book[]) {
    return save("books", items);
}

export function check_semantics(email: string, password: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
        return { error: "Email and password are required" };
    }

    if (!emailRegex.test(email)) {
        return { error: "Invalid email format" };
    }

    if (password.length < 6) {
        return { error: "Password must be at least 6 characters" };
    }

    return { error: null };
}

