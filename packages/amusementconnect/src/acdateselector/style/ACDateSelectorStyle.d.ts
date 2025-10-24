/**
 *
 * DatePicker is a form component to work with dates.
 *
 * [Live Demo](https://www.primevue.org/datepicker/)
 *
 * @module acdateselectorstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum ACDateSelectorClasses {
    /**
     * Class name of the root element
     */
    root = 'ac-datepicker',
    /**
     * Class name of the input element
     */
    pcInput = 'ac-datepicker-input',
    /**
     * Class name of the dropdown element
     */
    dropdown = 'ac-datepicker-dropdown',
    /**
     * Class name of the input icon container element
     */
    inputIconContainer = 'ac-datepicker-input-icon-container',
    /**
     * Class name of the input icon element
     */
    inputIcon = 'ac-datepicker-input-icon',
    /**
     * Class name of the clear icon element
     */
    clearIcon = 'ac-datepicker-clear-icon',
    /**
     * Class name of the panel element
     */
    panel = 'ac-datepicker-panel',
    /**
     * Class name of the panel element
     */
    panelContent = 'ac-datepicker-panel-content',
    /**
     * Class name of the calendar container element
     */
    calendarContainer = 'ac-datepicker-calendar-container',
    /**
     * Class name of the calendar element
     */
    calendar = 'ac-datepicker-calendar',
    /**
     * Class name of the header element
     */
    header = 'ac-datepicker-header',
    /**
     * Class name of the previous button element
     */
    pcPrevButton = 'ac-datepicker-prev-button',
    /**
     * Class name of the title element
     */
    title = 'ac-datepicker-title',
    /**
     * Class name of the select month element
     */
    selectMonth = 'ac-datepicker-select-month',
    /**
     * Class name of the select year element
     */
    selectYear = 'ac-datepicker-select-year',
    /**
     * Class name of the decade element
     */
    decade = 'ac-datepicker-decade',
    /**
     * Class name of the next button element
     */
    pcNextButton = 'ac-datepicker-next-button',
    /**
     * Class name of the day view element
     */
    dayView = 'ac-datepicker-day-view',
    /**
     * Class name of the week header element
     */
    weekHeader = 'ac-datepicker-weekheader',
    /**
     * Class name of the week number element
     */
    weekNumber = 'ac-datepicker-weeknumber',
    /**
     * Class name of the week label container element
     */
    weekLabelContainer = 'ac-datepicker-weeklabel-container',
    /**
     * Class name of the week day cell element
     */
    weekDayCell = 'ac-datepicker-weekday-cell',
    /**
     * Class name of the week day element
     */
    weekDay = 'ac-datepicker-weekday',
    /**
     * Class name of the day cell element
     */
    dayCell = 'ac-datepicker-day-cell',
    /**
     * Class name of the day element
     */
    day = 'ac-datepicker-day',
    /**
     * Class name of the month view element
     */
    monthView = 'ac-datepicker-month-view',
    /**
     * Class name of the month element
     */
    month = 'ac-datepicker-month',
    /**
     * Class name of the year view element
     */
    yearView = 'ac-datepicker-year-view',
    /**
     * Class name of the year element
     */
    year = 'ac-datepicker-year',
    /**
     * Class name of the time picker element
     */
    timePicker = 'ac-datepicker-time-picker',
    /**
     * Class name of the hour picker element
     */
    hourPicker = 'ac-datepicker-hour-picker',
    /**
     * Class name of the increment button element
     */
    pcIncrementButton = 'ac-datepicker-increment-button',
    /**
     * Class name of the decrement button element
     */
    pcDecrementButton = 'ac-datepicker-decrement-button',
    /**
     * Class name of the separator element
     */
    separator = 'ac-datepicker-separator',
    /**
     * Class name of the minute picker element
     */
    minutePicker = 'ac-datepicker-minute-picker',
    /**
     * Class name of the second picker element
     */
    secondPicker = 'ac-datepicker-second-picker',
    /**
     * Class name of the ampm picker element
     */
    ampmPicker = 'ac-datepicker-ampm-picker',
    /**
     * Class name of the buttonbar element
     */
    buttonbar = 'ac-datepicker-buttonbar',
    /**
     * Class name of the today button element
     */
    pcTodayButton = 'ac-datepicker-today-button',
    /**
     * Class name of the clear button element
     */
    pcClearButton = 'ac-datepicker-clear-button',
    /**
     * Class name of the preset list container element
     */
    presetListContainer = 'ac-datepicker-preset-list',
    /**
    /**
     * Class name of the preset list element
     */
    presetList = 'ac-datepicker-preset-list',
    /**
     * Class name of the preset list item element
     */
    presetListItem = 'ac-datepicker-preset-list-item',
    /**
     * Class name of the label wrapper
     */
    label = 'ac-datepicker-label'
}

export interface ACDateSelectorStyle extends BaseStyle {}
