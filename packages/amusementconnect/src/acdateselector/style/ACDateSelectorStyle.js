import { style } from '@ac/acprimeuix-styles/acdateselector';
import BaseStyle from '@primevue/core/base/style';

console.log(style)

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' || props.showClear ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, state }) => [
        'ac-datepicker p-component p-inputwrapper',
        {
            'p-invalid': instance.$invalid,
            'p-inputwrapper-filled': instance.$filled,
            'p-inputwrapper-focus': state.focused || state.overlayVisible,
            'p-focus': state.focused || state.overlayVisible,
            'ac-datepicker-fluid': instance.$fluid
        }
    ],
    pcInputText: 'ac-datepicker-input',
    clearIcon: 'ac-datepicker-clear-icon',
    dropdown: 'ac-datepicker-dropdown',
    inputIconContainer: 'ac-datepicker-input-icon-container',
    inputIcon: 'ac-datepicker-input-icon',
    panel: ({ props }) => [
        'ac-datepicker-panel p-component',
        {
            'ac-datepicker-panel-inline': props.inline,
            'p-disabled': props.disabled,
            'ac-datepicker-timeonly': props.timeOnly
        }
    ],
    panelContent: 'ac-datepicker-panel-content',
    calendarContainer: 'ac-datepicker-calendar-container',
    calendar: 'ac-datepicker-calendar',
    header: 'ac-datepicker-header',
    pcPrevButton: 'ac-datepicker-prev-button',
    title: 'ac-datepicker-title',
    selectMonth: 'ac-datepicker-select-month',
    selectYear: 'ac-datepicker-select-year',
    decade: 'ac-datepicker-decade',
    pcNextButton: 'ac-datepicker-next-button',
    dayView: 'ac-datepicker-day-view',
    weekHeader: 'ac-datepicker-weekheader p-disabled',
    weekNumber: 'ac-datepicker-weeknumber',
    weekLabelContainer: 'ac-datepicker-weeklabel-container p-disabled',
    weekDayCell: 'ac-datepicker-weekday-cell',
    weekDay: 'ac-datepicker-weekday',
    dayCell: ({ date }) => [
        'ac-datepicker-day-cell',
        {
            'ac-datepicker-other-month': date.otherMonth,
            'ac-datepicker-today': date.today
        }
    ],
    day: ({ instance, props, state, date }) => {
        let selectedDayClass = '';

        if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
            const start = typeof state.rawValue[0] === 'string' ? instance.parseValue(state.rawValue[0])[0] : state.rawValue[0];
            const end = typeof state.rawValue[1] === 'string' ? instance.parseValue(state.rawValue[1])[0] : state.rawValue[1];

            selectedDayClass = instance.isDateEquals(start, date) || instance.isDateEquals(end, date) ? 'ac-datepicker-day-selected' : 'ac-datepicker-day-selected-range';
        }

        return [
            'ac-datepicker-day',
            {
                'ac-datepicker-day-selected': !instance.isRangeSelection() && instance.isSelected(date) && date.selectable,
                'p-disabled': props.disabled || !date.selectable
            },
            selectedDayClass
        ];
    },
    monthView: 'ac-datepicker-month-view',
    month: ({ instance, props, month, index }) => [
        'ac-datepicker-month',
        {
            'ac-datepicker-month-selected': instance.isMonthSelected(index),
            'p-disabled': props.disabled || !month.selectable
        }
    ],
    yearView: 'ac-datepicker-year-view',
    year: ({ instance, props, year }) => [
        'ac-datepicker-year',
        {
            'ac-datepicker-year-selected': instance.isYearSelected(year.value),
            'p-disabled': props.disabled || !year.selectable
        }
    ],
    timePicker: 'ac-datepicker-time-picker',
    hourPicker: 'ac-datepicker-hour-picker',
    pcIncrementButton: 'ac-datepicker-increment-button',
    pcDecrementButton: 'ac-datepicker-decrement-button',
    separator: 'ac-datepicker-separator',
    minutePicker: 'ac-datepicker-minute-picker',
    secondPicker: 'ac-datepicker-second-picker',
    ampmPicker: 'ac-datepicker-ampm-picker',
    buttonbar: 'ac-datepicker-buttonbar',
    pcTodayButton: 'ac-datepicker-today-button',
    pcClearButton: 'ac-datepicker-clear-button',
    presetListContainer: 'ac-datepicker-preset-list-container',
    presetList: 'ac-datepicker-preset-list',
    presetListItem: 'ac-datepicker-preset-list-item',
    label: 'ac-datepicker-label'
};

export default BaseStyle.extend({
    name: 'acdateselector',
    style,
    classes,
    inlineStyles
});
