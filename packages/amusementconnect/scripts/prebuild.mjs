import fs from 'fs-extra';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Simplified path resolution for your use case
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __root = path.resolve(__dirname, '../');
const INPUT_DIR = 'src/';
const pkg = path.resolve(__root, './package.json');

// Exports for both components
const exports = {
    '.': './src/index.js',
    './acdateselector': './src/acdateselector/ACDateSelector.vue',
    './acdateselector/style': './src/acdateselector/style/ACDateSelectorStyle.js',
    './acdrawer': './src/acdrawer/ACDrawer.vue',
    './acdrawer/style': './src/acdrawer/style/ACDrawerStyle.js',
    './*': './*'
};

// Update package.json exports
const pkgJson = JSON.parse(fs.readFileSync(pkg, { encoding: 'utf8', flag: 'r' }));
pkgJson.exports = exports;
fs.writeFileSync(pkg, JSON.stringify(pkgJson, null, 4));

// Create index.js for both components
const indexContent = `// AC Components Package
export { default as ACDateSelector } from './acdateselector/ACDateSelector.vue';
export { default as ACDateSelectorStyle } from './acdateselector/style/ACDateSelectorStyle.js';
export { default as ACDrawer } from './acdrawer/ACDrawer.vue';
export { default as ACDrawerStyle } from './acdrawer/style/ACDrawerStyle.js';
`;

fs.writeFileSync(path.resolve(__root, INPUT_DIR, 'index.js'), indexContent);

// Create UMD build entry for both components
const umdContent = `// UMD build for AC Components
export { default as ACDateSelector } from '../acdateselector/ACDateSelector.vue';
export { default as ACDateSelectorStyle } from '../acdateselector/style/ACDateSelectorStyle.js';
export { default as ACDrawer } from '../acdrawer/ACDrawer.vue';
export { default as ACDrawerStyle } from '../acdrawer/style/ACDrawerStyle.js';
`;

// Ensure umd directory exists
fs.ensureDirSync(path.resolve(__root, INPUT_DIR, 'umd'));
fs.writeFileSync(path.resolve(__root, INPUT_DIR, 'umd/primevue.js'), umdContent);

console.log('✅ AC Components package prebuild completed');
console.log('   - ACDateSelector included');
console.log('   - ACDrawer included');