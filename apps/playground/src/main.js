import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { ref } from "vue"

const appOutlet = document.getElementById('app')
export const appOutletShadow = ref(null)

// if (appOutlet) {
//     // create shadow dom
//     appOutletShadow.value = appOutlet.attachShadow({ mode: 'open' })

//     // create inner container
//     const appContainer = document.createElement('div')
//     appContainer.style.display = 'none'
//     appContainer.style.height = '100%'
//     appOutletShadow.value.append(appContainer)

//     const facade = createApp(App)
//     facade.use(PrimeVue, {
//         theme: {
//             preset: Aura
//         }
//     });

//     const clonedStyles = []

//     // DEV
//     if (import.meta.env.DEV) {
//         // clone and disable styles for dev
//         Array.from(document.querySelectorAll
//             ('style[data-vite-dev-id],style[data-primevue-style-id]'))
//             .forEach((styleTag) => {
//             clonedStyles.push(styleTag.cloneNode(true))
//             styleTag.disabled = true
//         });
//     } else {
//         // clone and disable styles for prod
//         Array.from(document.querySelectorAll
//             ('style[data-primevue-style-id]'))
//             .forEach((styleTag) => {
//                 clonedStyles.push(styleTag.cloneNode(true))
//                 styleTag.disabled = true
//             })

//         Array.from(document.querySelectorAll
//             ('link[rel=stylesheet][href*=bi-report-index]'))
//             .forEach((linkTag) => {
//                 clonedStyles.push(linkTag.cloneNode(true))
//                 linkTag.disabled = true
//             })
//     }

//     // set up mutation observer to copy dynamically inserted primevue styles in shadowdom
//     const headObserver = new MutationObserver((mutations) => {
//         mutations.forEach((mutation) => {
//             // You can handle added/removed nodes here if needed
//             // For example, log added/removed nodes:
//             mutation.addedNodes.forEach(node => {
//                 if (
//                     node.nodeType === Node.ELEMENT_NODE &&
//                     node.tagName === 'STYLE' &&
//                     node.hasAttribute('data-primevue-style-id')
//                 ) {
//                     // node is a <style> tag with data-primevue-style-id attribute
//                     const clonedStyle = node.cloneNode(true);

//                     // insert style tag below all existing style tags
//                     const existingStyles = appOutletShadow.value.querySelectorAll('style');
//                     appOutletShadow.value.insertBefore(clonedStyle, existingStyles[existingStyles.length - 1].nextSibling);

//                     node.disabled = true;
//                 }
//             });
//         });
//     });

//     headObserver.observe(document.head, { childList: true });

//     // remove facade, set mounted, add styles, display container
//     facade.unmount()
//     appOutletShadow.value.prepend(...clonedStyles)
//     appContainer.style.display = 'block'

//     // create real app
//     const app = createApp(App)

//     app.use(PrimeVue, {
//         theme: {
//             preset: Aura
//         }
//     });

//     app.mount(appContainer);
// }

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount(appOutlet);