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
            Assets: resolve(__dirname, "./src/Assets"),
            Models: resolve(__dirname, "./Models"),
            Modules: resolve(__dirname, "./Modules"),
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
            '.tsx': "application/javascript",
        },
    }
});