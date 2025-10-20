import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            primevue: path.resolve(__dirname, '../../packages/primevue/src'),
            '@primevue/core': path.resolve(__dirname, '../../packages/core/src'),
            '@primevue/icons': path.resolve(__dirname, '../../packages/icons/src'),
            '@primevue/themes': path.resolve(__dirname, '../../packages/themes/src/presets'),
            '@primeuix/styles': path.resolve(__dirname, '../../../primeuix/packages/styles/src'),
            '@primeuix/utils': path.resolve(__dirname, '../../../primeuix/packages/utils/src'),
            '@primeuix/styled': path.resolve(__dirname, '../../../primeuix/packages/styled/src')
        },
        dedupe: ['vue']
    }
});
