import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(quarterOfYear);
dayjs.extend(updateLocale);
dayjs.updateLocale('en', { weekStart: 1 });

const AC_DATE_SELECTOR_PRESET_MAP = {
    TODAY: [dayjs().$d, dayjs().$d],
    YESTERDAY: [dayjs().subtract(1, 'day').$d, dayjs().subtract(1, 'day').$d],
    THIS_WEEK: [dayjs().startOf('week').$d, dayjs().$d],
    LAST_WEEK: [dayjs().subtract(1, 'week').startOf('week').$d, dayjs().subtract(1, 'week').endOf('week').$d],
    THIS_MONTH: [dayjs().startOf('month').$d, dayjs().$d],
    THIS_QUARTER: [dayjs().startOf('quarter').$d, dayjs().$d],
    LAST_MONTH: [dayjs().subtract(1, 'month').startOf('month').$d, dayjs().subtract(1, 'month').endOf('month').$d],
    LAST_QUARTER: [dayjs().subtract(1, 'quarter').startOf('quarter').$d, dayjs().subtract(1, 'quarter').endOf('quarter').$d],
    THIS_YEAR: [dayjs().startOf('year').$d, dayjs().$d],
    LAST_YEAR: [dayjs().subtract(1, 'year').startOf('year').$d, dayjs().subtract(1, 'year').endOf('year').$d],
    CUSTOM: []
};

// Internal mapping for display names (used by the component)
export const presetDisplayNames = {
    TODAY: 'Today',
    YESTERDAY: 'Yesterday',
    THIS_WEEK: 'This Week',
    LAST_WEEK: 'Last Week',
    THIS_MONTH: 'This Month',
    THIS_QUARTER: 'This Quarter',
    LAST_MONTH: 'Last Month',
    LAST_QUARTER: 'Last Quarter',
    THIS_YEAR: 'This Year',
    LAST_YEAR: 'Last Year',
    CUSTOM: 'Custom'
};

// Helper function to get current date ranges with optional filtering and maxDate constraint
export function getPresetMap(options = {}) {
    const { maxDate, excludedPresets = [] } = options;

    // If no options provided, return the static map
    if (!maxDate && excludedPresets.length === 0) {
        return AC_DATE_SELECTOR_PRESET_MAP;
    }

    const updatedMap = {};

    Object.keys(AC_DATE_SELECTOR_PRESET_MAP).forEach((key) => {
        // Skip excluded presets
        if (excludedPresets.includes(key)) {
            return;
        }

        if (key === 'CUSTOM') {
            updatedMap[key] = [];
            return;
        }

        const [start, end] = AC_DATE_SELECTOR_PRESET_MAP[key];

        // If maxDate is set and start date is after maxDate, exclude preset
        if (maxDate && dayjs(start).isAfter(maxDate, 'day')) {
            return;
        }

        // Constrain end date to maxDate if applicable
        const endDate = maxDate && dayjs(end).isAfter(maxDate, 'day') ? maxDate : end;
        updatedMap[key] = [start, endDate];
    });

    return updatedMap;
}
