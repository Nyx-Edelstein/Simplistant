import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    base: "./",
    resolve: {
        alias: {
            API: resolve(__dirname, "./API/"),
            Assets: resolve(__dirname, "./src/Assets"),
            Enum: resolve(__dirname, "./Enum"),
            Components: resolve(__dirname, "./Components"),
            Pages: resolve(__dirname, "./Pages"),
        },
    },
    build: {
        target: "esnext",
    },
    server: {
        mimeType: {
            '.js': "application/javascript",
            '.mjs': "application/javascript",
            '.jsx': "application/javascript",
            '.ts': "application/javascript",
            '.tsx': "application/javascript",
        },
    }
});