interface ImportMetaEnv {
    readonly VITE_API_URL_BINANCE: string;
    readonly VITE_URL_WEB_SOCKET: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
