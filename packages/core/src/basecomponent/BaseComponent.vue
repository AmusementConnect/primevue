<script>
import { Theme, ThemeService } from '@primeuix/styled';
import { findSingle, isElement } from '@primeuix/utils/dom';
import { getKeyValue, isArray, isFunction, isNotEmpty, isString, resolve, toFlatCase } from '@primeuix/utils/object';
import Base from '@primevue/core/base';
import BaseStyle from '@primevue/core/base/style';
import { useAttrSelector } from '@primevue/core/useattrselector';
import { mergeProps } from 'vue';
import BaseComponentStyle from './style/BaseComponentStyle';

export const ACDateSelectorStyle = /*css*/ `
    .p-datepicker {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('form.field.background');
        border: 1px solid dt('form.field.border.color');
        transition:
            background dt('form.field.transition.duration'),
            color dt('form.field.transition.duration'),
            border-color dt('form.field.transition.duration'),
            outline-color dt('form.field.transition.duration'),
            box-shadow dt('form.field.transition.duration');
        border-radius: dt('form.field.border.radius');
        outline-color: transparent;
        box-shadow: dt('form.field.shadow');
    }

    .p-datepicker:not(:disabled):hover {
        border-color: dt('form.field.hover.border.color');
    }

    .p-datepicker:not(.p-disabled).p-focus {
        border-color: dt('form.field.focus.border.color');
        box-shadow: dt('form.field.focus.ring.shadow');
        outline: dt('form.field.focus.ring.width') dt('form.field.focus.ring.style') dt('form.field.focus.ring.color');
        outline-offset: dt('form.field.focus.ring.offset');
    }

    .p-datepicker:focus-visible {
        box-shadow: dt('datepicker.dropdown.focus.ring.shadow');
        outline: dt('datepicker.dropdown.focus.ring.width') dt('datepicker.dropdown.focus.ring.style') dt('datepicker.dropdown.focus.ring.color');
        outline-offset: dt('datepicker.dropdown.focus.ring.offset');
    }

    .p-datepicker:has(.p-datepicker-input-icon-container) {
        position: relative;
    }

    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-datepicker-input-icon-container {
        cursor: pointer;
        position: absolute;
        top: 50%;
        inset-inline-end: dt('form.field.padding.x');
        margin-block-start: calc(-1 * (dt('icon.size') / 2));
        color: dt('datepicker.input.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-datepicker:has(.p-datepicker-input:disabled) .p-datepicker-input-icon-container {
        cursor: default;
    }

    .p-datepicker-fluid {
        display: flex;
    }

    .p-datepicker-fluid:has(.p-datepicker-dropdown) .p-datepicker-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-datepicker .p-datepicker-panel {
        min-width: 100%;
    }

    .p-datepicker-panel {
        width: auto;
        padding: dt('datepicker.panel.padding');
        background: dt('datepicker.panel.background');
        color: dt('datepicker.panel.color');
        border: 1px solid dt('datepicker.panel.border.color');
        border-radius: dt('datepicker.panel.border.radius');
        box-shadow: dt('datepicker.panel.shadow');
    }

    .p-datepicker-panel-content {
        display: flex;
    }

    .p-datepicker-panel-inline {
        display: inline-block;
        overflow-x: auto;
        box-shadow: none;
    }

    .p-datepicker-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('datepicker.header.padding');
        background: dt('datepicker.header.background');
        color: dt('datepicker.header.color');
        border-block-end: 1px solid dt('datepicker.header.border.color');
    }

    .p-datepicker-next-button:dir(rtl) {
        order: -1;
    }

    .p-datepicker-prev-button:dir(rtl) {
        order: 1;
    }

    .p-datepicker-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: dt('datepicker.title.gap');
        font-weight: dt('datepicker.title.font.weight');
    }

    .p-datepicker-select-year,
    .p-datepicker-select-month {
        border: none;
        background: transparent;
        margin: 0;
        cursor: pointer;
        font-weight: inherit;
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration');
    }

    .p-datepicker-select-month {
        padding: dt('datepicker.select.month.padding');
        color: dt('datepicker.select.month.color');
        border-radius: dt('datepicker.select.month.border.radius');
    }

    .p-datepicker-select-year {
        padding: dt('datepicker.select.year.padding');
        color: dt('datepicker.select.year.color');
        border-radius: dt('datepicker.select.year.border.radius');
    }

    .p-datepicker-select-month:enabled:hover {
        background: dt('datepicker.select.month.hover.background');
        color: dt('datepicker.select.month.hover.color');
    }

    .p-datepicker-select-year:enabled:hover {
        background: dt('datepicker.select.year.hover.background');
        color: dt('datepicker.select.year.hover.color');
    }

    .p-datepicker-select-month:focus-visible,
    .p-datepicker-select-year:focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-calendar-container {
        display: flex;
    }

    .p-datepicker-calendar-container .p-datepicker-calendar {
        flex: 1 1 auto;
        border-inline-start: 1px solid dt('datepicker.group.border.color');
        padding-inline-end: dt('datepicker.group.gap');
        padding-inline-start: dt('datepicker.group.gap');
    }

    .p-datepicker-calendar-container .p-datepicker-calendar:first-child {
        padding-inline-start: 0;
        border-inline-start: 0 none;
    }

    .p-datepicker-calendar-container .p-datepicker-calendar:last-child {
        padding-inline-end: 0;
    }

    .p-datepicker-day-view {
        width: 100%;
        border-collapse: collapse;
        font-size: 1rem;
        margin: dt('datepicker.day.view.margin');
    }

    .p-datepicker-weekday-cell {
        padding: dt('datepicker.week.day.padding');
    }

    .p-datepicker-weekday {
        font-weight: dt('datepicker.week.day.font.weight');
        color: dt('datepicker.week.day.color');
    }

    .p-datepicker-day-cell {
        padding: dt('datepicker.date.padding');
    }

    .p-datepicker-day {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        width: dt('datepicker.date.width');
        height: dt('datepicker.date.height');
        border-radius: dt('datepicker.date.border.radius');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        border: 1px solid transparent;
        outline-color: transparent;
        color: dt('datepicker.date.color');
    }

    .p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {
        background: dt('datepicker.date.hover.background');
        color: dt('datepicker.date.hover.color');
    }

    .p-datepicker-day:focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-day-selected {
        background: dt('datepicker.date.selected.background');
        color: dt('datepicker.date.selected.color');
    }

    .p-datepicker-day-selected-range {
        background: dt('datepicker.date.range.selected.background');
        color: dt('datepicker.date.range.selected.color');
    }

    .p-datepicker-today > .p-datepicker-day {
        background: dt('datepicker.today.background');
        color: dt('datepicker.today.color');
    }

    .p-datepicker-today > .p-datepicker-day-selected {
        background: dt('datepicker.date.selected.background');
        color: dt('datepicker.date.selected.color');
    }

    .p-datepicker-today > .p-datepicker-day-selected-range {
        background: dt('datepicker.date.range.selected.background');
        color: dt('datepicker.date.range.selected.color');
    }

    .p-datepicker-weeknumber {
        text-align: center;
    }

    .p-datepicker-month-view {
        margin: dt('datepicker.month.view.margin');
    }

    .p-datepicker-month {
        width: 33.3%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        padding: dt('datepicker.month.padding');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        border-radius: dt('datepicker.month.border.radius');
        outline-color: transparent;
        color: dt('datepicker.date.color');
    }

    .p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {
        color: dt('datepicker.date.hover.color');
        background: dt('datepicker.date.hover.background');
    }

    .p-datepicker-month-selected {
        color: dt('datepicker.date.selected.color');
        background: dt('datepicker.date.selected.background');
    }

    .p-datepicker-month:not(.p-disabled):focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-year-view {
        margin: dt('datepicker.year.view.margin');
    }

    .p-datepicker-year {
        width: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        padding: dt('datepicker.year.padding');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        border-radius: dt('datepicker.year.border.radius');
        outline-color: transparent;
        color: dt('datepicker.date.color');
    }

    .p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {
        color: dt('datepicker.date.hover.color');
        background: dt('datepicker.date.hover.background');
    }

    .p-datepicker-year-selected {
        color: dt('datepicker.date.selected.color');
        background: dt('datepicker.date.selected.background');
    }

    .p-datepicker-year:not(.p-disabled):focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-buttonbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('datepicker.buttonbar.padding');
        border-block-start: 1px solid dt('datepicker.buttonbar.border.color');
    }

    .p-datepicker-buttonbar .p-button {
        width: auto;
    }

    .p-datepicker-time-picker {
        display: flex;
        justify-content: center;
        align-items: center;
        border-block-start: 1px solid dt('datepicker.time.picker.border.color');
        padding: 0;
        gap: dt('datepicker.time.picker.gap');
    }

    .p-datepicker-calendar-container + .p-datepicker-time-picker {
        padding: dt('datepicker.time.picker.padding');
    }

    .p-datepicker-time-picker > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: dt('datepicker.time.picker.button.gap');
    }

    .p-datepicker-time-picker span {
        font-size: 1rem;
    }

    .p-datepicker-timeonly .p-datepicker-time-picker {
        border-block-start: 0 none;
    }

    .p-datepicker-time-picker:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown {
        width: dt('datepicker.dropdown.sm.width');
    }

    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown .p-icon,
    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-input-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown {
        width: dt('datepicker.dropdown.lg.width');
    }

    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown .p-icon,
    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-input-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-datepicker-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-clear-icon {
        inset-inline-end: calc(dt('datepicker.dropdown.width') + dt('form.field.padding.x'));
    }

    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-clear-icon {
        inset-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-datepicker:has(.p-datepicker-clear-icon) .p-datepicker-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-datepicker:has(.p-datepicker-input-icon-container):has(.p-datepicker-clear-icon) .p-datepicker-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 3) + calc(dt('icon.size') * 2));
    }

    .p-inputgroup .p-datepicker-dropdown {
        border-radius: 0;
    }

    .p-inputgroup > .p-datepicker:last-child:has(.p-datepicker-dropdown) > .p-datepicker-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-inputgroup > .p-datepicker:last-child .p-datepicker-dropdown {
        border-start-end-radius: dt('datepicker.dropdown.border.radius');
        border-end-end-radius: dt('datepicker.dropdown.border.radius');
    }

    .p-datepicker-preset-list-container {
        display: flex;
        flex-direction: column;
        text-wrap: nowrap;
        margin-right: dt('datepicker.group.gap');
        padding-right: dt('datepicker.group.gap');
        border-right: 1px solid dt('datepicker.header.border.color')
    }

    .p-datepicker-preset-list {
        list-style-type: none;
        padding-left: 0;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    
    .p-datepicker-preset-list-item {
        display: flex;
        gap: 7px;
        align-items: center;
    }

    .p-datepicker-label {
        display: flex;
        align-items: center;
        gap: 3px;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: 0.75rem;
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('form.field.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
        font-size: 1rem;
    }

    .p-datepicker-label strong {
        font-weight: 500;
        padding-right: 7px;
        border-right: 1px solid dt('datepicker.header.border.color');
    }
`;

export default {
    name: 'BaseComponent',
    props: {
        pt: {
            type: Object,
            default: undefined
        },
        ptOptions: {
            type: Object,
            default: undefined
        },
        unstyled: {
            type: Boolean,
            default: undefined
        },
        dt: {
            type: Object,
            default: undefined
        }
    },
    inject: {
        $parentInstance: {
            default: undefined
        }
    },
    watch: {
        isUnstyled: {
            immediate: true,
            handler(newValue) {
                ThemeService.off('theme:change', this._loadCoreStyles);

                if (!newValue) {
                    this._loadCoreStyles();
                    this._themeChangeListener(this._loadCoreStyles); // update styles with theme settings
                }
            }
        },
        dt: {
            immediate: true,
            handler(newValue, oldValue) {
                ThemeService.off('theme:change', this._themeScopedListener);

                if (newValue) {
                    this._loadScopedThemeStyles(newValue);
                    this._themeScopedListener = () => this._loadScopedThemeStyles(newValue);
                    this._themeChangeListener(this._themeScopedListener);
                } else {
                    this._unloadScopedThemeStyles();
                }
            }
        }
    },
    scopedStyleEl: undefined,
    rootEl: undefined,
    uid: undefined,
    $attrSelector: undefined,
    beforeCreate() {
        const _usept = this.pt?.['_usept'];
        const originalValue = _usept ? this.pt?.originalValue?.[this.$.type.name] : undefined;
        const value = _usept ? this.pt?.value?.[this.$.type.name] : this.pt;

        (value || originalValue)?.hooks?.['onBeforeCreate']?.();

        const _useptInConfig = this.$primevueConfig?.pt?.['_usept'];
        const originalValueInConfig = _useptInConfig ? this.$primevue?.config?.pt?.originalValue : undefined;
        const valueInConfig = _useptInConfig ? this.$primevue?.config?.pt?.value : this.$primevue?.config?.pt;

        (valueInConfig || originalValueInConfig)?.[this.$.type.name]?.hooks?.['onBeforeCreate']?.();

        this.$attrSelector = useAttrSelector();
        this.uid = this.$attrs.id || this.$attrSelector.replace('pc', 'pv_id_');
    },
    created() {
        this._hook('onCreated');
    },
    beforeMount() {
        // @deprecated - remove in v5
        this.rootEl = findSingle(isElement(this.$el) ? this.$el : this.$el?.parentElement, `[${this.$attrSelector}]`);

        if (this.rootEl) {
            this.rootEl.$pc = { name: this.$.type.name, attrSelector: this.$attrSelector, ...this.$params };
        }

        this._loadStyles();
        this._hook('onBeforeMount');
    },
    mounted() {
        this._hook('onMounted');
    },
    beforeUpdate() {
        this._hook('onBeforeUpdate');
    },
    updated() {
        this._hook('onUpdated');
    },
    beforeUnmount() {
        this._hook('onBeforeUnmount');
    },
    unmounted() {
        this._removeThemeListeners();
        this._unloadScopedThemeStyles();
        this._hook('onUnmounted');
    },
    methods: {
        _hook(hookName) {
            if (!this.$options.hostName) {
                const selfHook = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, `hooks.${hookName}`);
                const defaultHook = this._useDefaultPT(this._getOptionValue, `hooks.${hookName}`);

                selfHook?.();
                defaultHook?.();
            }
        },
        _mergeProps(fn, ...args) {
            return isFunction(fn) ? fn(...args) : mergeProps(...args);
        },
        _load() {
            // @todo
            if (!Base.isStyleNameLoaded('base')) {
                BaseStyle.loadCSS(this.$styleOptions);
                this._loadGlobalStyles();

                Base.setLoadedStyleName('base');
            }

            this._loadThemeStyles();
        },
        _loadStyles() {
            this._load();
            this._themeChangeListener(this._load);
        },
        _loadCoreStyles() {
            if (!Base.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
                BaseComponentStyle.loadCSS(this.$styleOptions);
                this.$options.style && this.$style.loadCSS(this.$styleOptions);

                Base.setLoadedStyleName(this.$style.name);
            }
        },
        _loadGlobalStyles() {
            /*
             * @todo Add self custom css support;
             * <Panel :pt="{ css: `...` }" .../>
             *
             * const selfCSS = this._getPTClassValue(this.pt, 'css', this.$params);
             * const defaultCSS = this._getPTClassValue(this.defaultPT, 'css', this.$params);
             * const mergedCSS = mergeProps(selfCSS, defaultCSS);
             * isNotEmpty(mergedCSS?.class) && this.$css.loadCustomStyle(mergedCSS?.class);
             */

            const globalCSS = this._useGlobalPT(this._getOptionValue, 'global.css', this.$params);

            isNotEmpty(globalCSS) && BaseStyle.load(globalCSS, { name: 'global', ...this.$styleOptions });
        },
        _loadThemeStyles() {
            if (this.isUnstyled || this.$theme === 'none') return;

            // common
            if (!Theme.isStyleNameLoaded('common')) {
                const { primitive, semantic, global, style } = this.$style?.getCommonTheme?.() || {};

                BaseStyle.load(primitive?.css, { name: 'primitive-variables', ...this.$styleOptions });
                BaseStyle.load(semantic?.css, { name: 'semantic-variables', ...this.$styleOptions });
                BaseStyle.load(global?.css, { name: 'global-variables', ...this.$styleOptions });
                BaseStyle.loadStyle({ name: 'global-style', ...this.$styleOptions }, style);

                Theme.setLoadedStyleName('common');
            }

            // component
            if (!Theme.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
                const { css, style } = this.$style?.getComponentTheme?.() || {};
debugger
                this.$style?.load(this.$style.name == 'acdateselector' ? ACDateSelectorStyle : css, { name: `${this.$style.name == 'acdateselector' ? 'datepicker' : this.$style.name}-variables`, ...this.$styleOptions });
                this.$style?.loadStyle({ name: `${this.$style.name == 'acdateselector' ? 'datepicker' : this.$style.name}-style`, ...this.$styleOptions }, this.$style.name == 'acdateselector' ? ACDateSelectorStyle : style);

                Theme.setLoadedStyleName(this.$style.name);
            }

            // layer order
            if (!Theme.isStyleNameLoaded('layer-order')) {
                const layerOrder = this.$style?.getLayerOrderThemeCSS?.();

                BaseStyle.load(layerOrder, { name: 'layer-order', first: true, ...this.$styleOptions });

                Theme.setLoadedStyleName('layer-order');
            }
        },
        _loadScopedThemeStyles(preset) {
            const { css } = this.$style?.getPresetTheme?.(preset, `[${this.$attrSelector}]`) || {};
            const scopedStyle = this.$style?.load(css, { name: `${this.$attrSelector}-${this.$style.name}`, ...this.$styleOptions });

            this.scopedStyleEl = scopedStyle.el;
        },
        _unloadScopedThemeStyles() {
            this.scopedStyleEl?.value?.remove();
        },
        _themeChangeListener(callback = () => {}) {
            Base.clearLoadedStyleNames();
            ThemeService.on('theme:change', callback);
        },
        _removeThemeListeners() {
            ThemeService.off('theme:change', this._loadCoreStyles);
            ThemeService.off('theme:change', this._load);
            ThemeService.off('theme:change', this._themeScopedListener);
        },
        _getHostInstance(instance) {
            return instance ? (this.$options.hostName ? (instance.$.type.name === this.$options.hostName ? instance : this._getHostInstance(instance.$parentInstance)) : instance.$parentInstance) : undefined;
        },
        _getPropValue(name) {
            return this[name] || this._getHostInstance(this)?.[name];
        },
        _getOptionValue(options, key = '', params = {}) {
            return getKeyValue(options, key, params);
        },
        _getPTValue(obj = {}, key = '', params = {}, searchInDefaultPT = true) {
            const searchOut = /./g.test(key) && !!params[key.split('.')[0]];
            const { mergeSections = true, mergeProps: useMergeProps = false } = this._getPropValue('ptOptions') || this.$primevueConfig?.ptOptions || {};
            const global = searchInDefaultPT ? (searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params)) : undefined;
            const self = searchOut ? undefined : this._getPTSelf(obj, this._getPTClassValue, key, { ...params, global: global || {} });
            const datasets = this._getPTDatasets(key);

            return mergeSections || (!mergeSections && self) ? (useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : { ...global, ...self, ...datasets }) : { ...self, ...datasets };
        },
        _getPTSelf(obj = {}, ...args) {
            return mergeProps(
                this._usePT(this._getPT(obj, this.$name), ...args), // Exp; <component :pt="{}"
                this._usePT(this.$_attrsPT, ...args) // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
            );
        },
        _getPTDatasets(key = '') {
            const datasetPrefix = 'data-pc-';
            const isExtended = key === 'root' && isNotEmpty(this.pt?.['data-pc-section']);

            return (
                key !== 'transition' && {
                    ...(key === 'root' && {
                        [`${datasetPrefix}name`]: toFlatCase(isExtended ? this.pt?.['data-pc-section'] : this.$.type.name),
                        ...(isExtended && { [`${datasetPrefix}extend`]: toFlatCase(this.$.type.name) }),
                        [`${this.$attrSelector}`]: ''
                    }),
                    [`${datasetPrefix}section`]: toFlatCase(key)
                }
            );
        },
        _getPTClassValue(...args) {
            const value = this._getOptionValue(...args);

            return isString(value) || isArray(value) ? { class: value } : value;
        },
        _getPT(pt, key = '', callback) {
            const getValue = (value, checkSameKey = false) => {
                const computedValue = callback ? callback(value) : value;
                const _key = toFlatCase(key);
                const _cKey = toFlatCase(this.$name);

                return (checkSameKey ? (_key !== _cKey ? computedValue?.[_key] : undefined) : computedValue?.[_key]) ?? computedValue;
            };

            return pt?.hasOwnProperty('_usept')
                ? {
                      _usept: pt['_usept'],
                      originalValue: getValue(pt.originalValue),
                      value: getValue(pt.value)
                  }
                : getValue(pt, true);
        },
        _usePT(pt, callback, key, params) {
            const fn = (value) => callback(value, key, params);

            if (pt?.hasOwnProperty('_usept')) {
                const { mergeSections = true, mergeProps: useMergeProps = false } = pt['_usept'] || this.$primevueConfig?.ptOptions || {};
                const originalValue = fn(pt.originalValue);
                const value = fn(pt.value);

                if (originalValue === undefined && value === undefined) return undefined;
                else if (isString(value)) return value;
                else if (isString(originalValue)) return originalValue;

                return mergeSections || (!mergeSections && value) ? (useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : { ...originalValue, ...value }) : value;
            }

            return fn(pt);
        },
        _useGlobalPT(callback, key, params) {
            return this._usePT(this.globalPT, callback, key, params);
        },
        _useDefaultPT(callback, key, params) {
            return this._usePT(this.defaultPT, callback, key, params);
        },
        ptm(key = '', params = {}) {
            return this._getPTValue(this.pt, key, { ...this.$params, ...params });
        },
        ptmi(key = '', params = {}) {
            // inheritAttrs:true
            const attrs = mergeProps(this.$_attrsWithoutPT, this.ptm(key, params));

            attrs?.hasOwnProperty('id') && (attrs.id ??= this.$id);

            return attrs;
        },
        ptmo(obj = {}, key = '', params = {}) {
            return this._getPTValue(obj, key, { instance: this, ...params }, false);
        },
        cx(key = '', params = {}) {
            return !this.isUnstyled ? this._getOptionValue(this.$style.classes, key, { ...this.$params, ...params }) : undefined;
        },
        sx(key = '', when = true, params = {}) {
            if (when) {
                const self = this._getOptionValue(this.$style.inlineStyles, key, { ...this.$params, ...params });
                const base = this._getOptionValue(BaseComponentStyle.inlineStyles, key, { ...this.$params, ...params });

                return [base, self];
            }

            return undefined;
        }
    },
    computed: {
        globalPT() {
            return this._getPT(this.$primevueConfig?.pt, undefined, (value) => resolve(value, { instance: this }));
        },
        defaultPT() {
            return this._getPT(this.$primevueConfig?.pt, undefined, (value) => this._getOptionValue(value, this.$name, { ...this.$params }) || resolve(value, { ...this.$params }));
        },
        isUnstyled() {
            return this.unstyled !== undefined ? this.unstyled : this.$primevueConfig?.unstyled;
        },
        $id() {
            return this.$attrs.id || this.uid;
        },
        $inProps() {
            const nodePropKeys = Object.keys(this.$.vnode?.props || {});

            return Object.fromEntries(Object.entries(this.$props).filter(([k]) => nodePropKeys?.includes(k)));
        },
        $theme() {
            return this.$primevueConfig?.theme;
        },
        $style() {
            return { classes: undefined, inlineStyles: undefined, load: () => {}, loadCSS: () => {}, loadStyle: () => {}, ...(this._getHostInstance(this) || {}).$style, ...this.$options.style };
        },
        $styleOptions() {
            return { nonce: this.$primevueConfig?.csp?.nonce };
        },
        $primevueConfig() {
            return this.$primevue?.config;
        },
        $name() {
            return this.$options.hostName || this.$.type.name;
        },
        $params() {
            const parentInstance = this._getHostInstance(this) || this.$parent;

            return {
                instance: this,
                props: this.$props,
                state: this.$data,
                attrs: this.$attrs,
                parent: {
                    instance: parentInstance,
                    props: parentInstance?.$props,
                    state: parentInstance?.$data,
                    attrs: parentInstance?.$attrs
                }
            };
        },
        $_attrsPT() {
            return Object.entries(this.$attrs || {})
                .filter(([key]) => key?.startsWith('pt:'))
                .reduce((result, [key, value]) => {
                    const [, ...rest] = key.split(':');

                    rest?.reduce((currentObj, nestedKey, index, array) => {
                        !currentObj[nestedKey] && (currentObj[nestedKey] = index === array.length - 1 ? value : {});

                        return currentObj[nestedKey];
                    }, result);

                    return result;
                }, {});
        },
        $_attrsWithoutPT() {
            return Object.entries(this.$attrs || {})
                .filter(([key]) => !key?.startsWith('pt:'))
                .reduce((acc, [key, value]) => {
                    acc[key] = value;

                    return acc;
                }, {});
        }
    }
};
</script>
