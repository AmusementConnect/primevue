# AC PrimeVue

Custom PrimeVue components library for Amusement Connect organization.

## Overview

AC PrimeVue is a collection of specialized Vue 3 components built on top of PrimeVue, designed specifically for Amusement Connect applications. It provides enhanced date selection and drawer components with custom styling and functionality.

## Installation

```bash
npm install @ac/ac-primevue
```

## Peer Dependencies

This package requires the following peer dependencies:

```json
{
    "@primeuix/styled": "^0.7.4",
    "@primeuix/styles": "^1.2.5",
    "@primeuix/utils": "^0.6.1",
    "@primevue/core": "^4.4.1",
    "@primevue/icons": "^4.4.1"
}
```

## Components

### ACDateSelector

An enhanced date selector component with preset date ranges and custom functionality.

#### Features

- Predefined date range presets (Today, Yesterday, This Week, Last Month, etc.)
- Custom date range selection
- Built on PrimeVue Calendar with extended functionality
- Supports both single date and date range selection
- Customizable display names and preset mappings

#### Basic Usage

```vue
<template>
    <ACDateSelector v-model="selectedDate" :excluded-presets="['TODAY']" />
</template>

<script setup>
import { ref } from 'vue';
import { ACDateSelector } from '@ac/ac-primevue';

const selectedDate = ref(null);
</script>
```

#### Available Presets

- `TODAY` - Current day
- `YESTERDAY` - Previous day
- `THIS_WEEK` - Current week (Monday to today)
- `LAST_WEEK` - Previous complete week
- `THIS_MONTH` - Current month (1st to today)
- `THIS_QUARTER` - Current quarter
- `LAST_MONTH` - Previous complete month
- `LAST_QUARTER` - Previous complete quarter
- `THIS_YEAR` - Current year (Jan 1st to today)
- `LAST_YEAR` - Previous complete year
- `CUSTOM` - Custom date range selection

#### Importing Preset Utilities

```javascript
import { presetDisplayNames, getPresetMap } from '@ac/ac-primevue';

// Get display names for presets
console.log(presetDisplayNames.TODAY); // "Today"

// Define your preset map, includes support for excluding specific presets and modifying presets with max-date
const presetRanges = getPresetMap();
console.log(presetRanges.THIS_WEEK); // [startDate, endDate]
```

### ACDrawer

A customizable drawer/sidebar component with enhanced features.

#### Features

- This is exactly as the PrimeVue drawer with an append-to prop added for use in a shadowdom.

#### Basic Usage

```vue
<template>
    <div>
        <Button label="Show Drawer" @click="visible = true" />

        <ACDrawer v-model:visible="visible" position="right" header="Drawer Title" :style="{ width: '30rem' }">
            <p>Drawer content goes here...</p>

            <template #footer>
                <Button label="Cancel" @click="visible = false" />
                <Button label="Save" @click="save" />
            </template>
        </ACDrawer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ACDrawer } from '@ac/ac-primevue';
import Button from 'primevue/button';

const visible = ref(false);

const save = () => {
    // Save logic
    visible.value = false;
};
</script>
```

## Styling

### Component Styles

Import component styles individually:

```javascript
// ACDateSelector styles
import '@ac/ac-primevue/acdateselector/style';

// ACDrawer styles
import '@ac/ac-primevue/acdrawer/style';
```

### Custom Styling

The components use AC-specific styling from `@ac/acprimeuix-styles`. Customize themes by modifying CSS custom properties or extending the base styles.

## Development

### Building

```bash
# Build the package
npm run build

# Build with watch mode for development
npm run build:watch
```

### Testing

```bash
# Run tests
npm test
```

### Linking for Development

```bash
# Link package globally for development
npm run dev:link
```

```typescript
import type { ACDateSelectorProps } from '@ac/ac-primevue/acdateselector';
import type { ACDrawerProps } from '@ac/ac-primevue/acdrawer';
```

## Dependencies

- **dayjs**: Date manipulation and formatting
- **@ac/acprimeuix-styles**: AC-specific styling theme
- **PrimeVue ecosystem**: Built on PrimeVue v4+ with modern Vue 3 composition API

---
