interface ImportMetaEnv {
    readonly VITE_BACKEND_URL: string;
    // можно добавить и другие переменные:
    // readonly VITE_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}