import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react({
        jsxImportSource: '@emotion/react',
        babel: {
            plugins: ['@emotion/babel-plugin'],
            babelrc: true,
        },
    }), tsconfigPaths(), svgr(), splitVendorChunkPlugin()],
    base: '',
    build: {
        outDir: 'build',
        cssMinify: true,
    },
    server: {
        port: 3000,
        open: false,
        host: true,
        strictPort: true,
    },
});

// in some cases manual chunk splitting is better:

// import { dependencies } from './package.json';
// function renderChunks(deps: Record<string, string>) {
//     const chunks = {};
//     Object.keys(deps).forEach((key) => {
//         if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
//         chunks[key] = [key];
//     });
//     return chunks;
// }

// build.rollupOptions
// rollupOptions: {
//     output: {
//         manualChunks: {
//             vendor: ['react', 'react-router-dom', 'react-dom'],
//             ...renderChunks(dependencies),
//         },
//     },
// },
