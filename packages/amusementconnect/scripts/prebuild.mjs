import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Simplified path resolution for your use case
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __root = path.resolve(__dirname, '../');
const INPUT_DIR = 'src/';
const pkg = path.resolve(__root, './package.json');

// Simple exports for both components
const exports = {
    '.': './src/index.js',
    './acdateselector': './src/acdateselector/ACDateSelector.vue',
    './acdateselector/style': './src/acdateselector/style/ACDateSelectorStyle.js',
    './acdrawer': './src/acdrawer/ACDrawer.vue',
    './acdrawer/style': './src/acdrawer/style/ACDrawerStyle.js',
    './*': './*'
};

// Update package.json exports
const pkgJson = JSON.parse(readFileSync(pkg, { encoding: 'utf8', flag: 'r' }));
pkgJson.exports = exports;
writeFileSync(pkg, JSON.stringify(pkgJson, null, 4));

// Create simple index.js for main export
const indexContent = `// ACPrimevue Packages
export { default as ACDateSelector } from './acdateselector/ACDateSelector.vue';
export { default as ACDateSelectorStyle } from './acdateselector/style/ACDateSelectorStyle.js';
export { default as ACDrawer } from './acdrawer/ACDrawer.vue';
export { default as ACDrawerStyle } from './acdrawer/style/ACDrawerStyle.js';
`;

writeFileSync(path.resolve(__root, INPUT_DIR, 'index.js'), indexContent);

// Create UMD build entry
const umdContent = `// UMD build for ACPrimevue Components
export { default as ACDateSelector } from '../acdateselector/ACDateSelector.vue';
export { default as ACDateSelectorStyle } from '../acdateselector/style/ACDateSelectorStyle.js';
export { default as ACDrawer } from '../acdrawer/ACDrawer.vue';
export { default as ACDrawerStyle } from '../acdrawer/style/ACDrawerStyle.js';
`;

// Ensure umd directory exists (using Node.js built-in fs)
const umdDir = path.resolve(__root, INPUT_DIR, 'umd');
if (!existsSync(umdDir)) {
    mkdirSync(umdDir, { recursive: true });
}
writeFileSync(path.resolve(umdDir, 'primevue.js'), umdContent);

console.log('✅ package prebuild completed');
console.log('   - ACDateSelector included');
console.log('   - ACDrawer included');