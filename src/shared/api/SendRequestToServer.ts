import { HttpMethod } from "./HttpMethod.ts";
import { API } from "./API.ts";

interface FetcherOptions {
    httpMethod?: HttpMethod;
    body?: any;
    headers?: HeadersInit;
    withCredentials?: boolean; // 👈 Добавлена опция
}

export const sendRequestToServer = async <T = any>(
    api: API,
    options: FetcherOptions = {}
): Promise<T | null> => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}${api}`, {
            method: options.httpMethod || HttpMethod.GET,
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
            body: options.body ? JSON.stringify(options.body) : undefined,
            credentials: options.withCredentials ? "include" : "same-origin", // 👈 здесь
        });

        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }

        console.log(response);

        return await response.json();
    } catch (error) {
        console.error("Ошибка в fetcher:", error);
        return null;
    }
};
