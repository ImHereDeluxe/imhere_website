import { HttpMethod } from "./HttpMethod.ts";
import { API } from "./API.ts";

interface FetcherOptions {
    httpMethod?: HttpMethod;
    body?: any;
    headers?: HeadersInit;
    withCredentials?: boolean;
    isFormData?: boolean; // 👈 новое поле
}

export const sendRequestToServer = async <T = any>(
    api: API,
    options: FetcherOptions = {}
): Promise<T | null> => {
    try {
        console.log("OK 1");

        const isFormData = options.isFormData ?? false;

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}${api}`, {
            method: options.httpMethod || HttpMethod.GET,
            headers: isFormData
                ? undefined // fetch сам установит Content-Type для FormData
                : {
                    "Content-Type": "application/json",
                    ...(options.headers || {}),
                },
            body: isFormData ? options.body : options.body ? JSON.stringify(options.body) : undefined,
            credentials: options.withCredentials ? "include" : "same-origin",
        });

        console.log("OK 2");

        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }

        console.log("OK 3");

        const data = await response.json();
        console.log("[FETCH] response body:", data);

        return data;
    } catch (error) {
        console.error("Ошибка в fetcher:", error);
        return null;
    }
};
