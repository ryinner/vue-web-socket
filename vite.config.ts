import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const appDir = path.resolve(__dirname);
const srcDir = path.join(appDir, 'src');
const indexFile = path.join(srcDir, 'index.ts');

export default defineConfig({
    plugins: [
        vue(),
        dts()
    ],
    build: {
        lib: {
            entry: indexFile,
            name: 'VueWebSocket',
            fileName: 'index'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});
