import React, {FC, useCallback, useEffect, useState} from 'react';
import {ICalendar} from "./ICalendar";
import './Calendar.scss';
import {IDay} from "../../types/IDay";
import {formMonthModel} from "../../logic/formMonthModel";
import {getCurrentYear} from "../../logic/getCurrentYear";
import {getCurrentMonth} from "../../logic/getCurrentMonth";
import {DaysOfTheWeek} from "./DaysOfTheWeek/DaysOfTheWeek";
import {ListOfDays} from "./ListOfDays/ListOfDays";
import {EMonths} from "../../types/EMonths";
import {ECalendarMode} from "../../types/ECalendarMode";
import {AllMonths} from "./AllMonths/AllMonths";
import {Years} from "./Years/Years";

export const Calendar: FC<ICalendar> = () => {
    const [month, setMonth] = useState<IDay[][]>([[]]);
    const [currentMonth, setCurrentMonth] = useState<number>(getCurrentMonth);
    const [currentYear, setCurrentYear] = useState<number>(getCurrentYear);
    const [mode, setMode] = useState<ECalendarMode>(ECalendarMode.Days);

    useEffect(() => {
        setMonth(formMonthModel(currentMonth, currentYear));
    }, [currentMonth])

    const showPreviousMonth = useCallback(() => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    }, [currentMonth])

    const showNextMonth = useCallback(() => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    }, [currentMonth])

    const showAllMonths = useCallback(() => {
        if (mode === ECalendarMode.Days) {
            setMode(ECalendarMode.Months);
        } else if (mode === ECalendarMode.Months) {
            setMode(ECalendarMode.Years);
        } else if (mode === ECalendarMode.Years) {
            setMode(ECalendarMode.Days);
        }
    }, [mode])

    const changeMonth = useCallback((index: number) => {
        setMonth(formMonthModel(index, currentYear));
        setCurrentMonth(index);
        setMode(ECalendarMode.Days);
    }, [])

    const changeYear = useCallback((year: number) => {
        setMonth(formMonthModel(currentMonth, year));
        setCurrentYear(year);
        setMode(ECalendarMode.Days);
    }, [])

    return <div className="Calendar">
        <div className="MonthContainer">
            <svg onClick={showPreviousMonth} className="Arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" fill="none">
                <path
                    d="M11.0002 4.58569L3.58594 11.9999L11.0002 19.4141L12.4144 17.9999L7.41436 12.9999H20.0002V10.9999H7.41436L12.4144 5.99991L11.0002 4.58569Z"
                    fill="black"/>
            </svg>
            {
                (mode === ECalendarMode.Days || mode === ECalendarMode.Years)
                    ?
                    <div onClick={showAllMonths} className="MonthYear">{EMonths[currentMonth]} {currentYear}</div>
                    :
                    <div onClick={showAllMonths} className="MonthYear">{currentYear}</div>
            }
            <svg onClick={showNextMonth} className="Arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24"
                 fill="none">
                <path
                    d="M13 4.58569L20.4142 11.9999L13 19.4141L11.5858 17.9999L16.5858 12.9999H4V10.9999H16.5858L11.5858 5.99991L13 4.58569Z"
                    fill="black"/>
            </svg>
        </div>
        {
            mode === ECalendarMode.Days &&
            <div className="MonthTable">
                <DaysOfTheWeek/>
                <ListOfDays month={month}/>
            </div>
        }
        {
            mode === ECalendarMode.Months && <AllMonths onChange={changeMonth} currentMonth={currentMonth}/>
        }
        {
            mode === ECalendarMode.Years && <Years onChange={changeYear} currentYear={currentYear}/>
        }
    </div>
}
