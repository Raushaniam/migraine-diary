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
import {getCurrentDay} from "../../logic/getCurrentDay";
import {getCurrentPeriod} from "../../logic/getCurrentPeriod";

export const Calendar: FC<ICalendar> = () => {
    const [month, setMonth] = useState<IDay[][]>([[]]);
    const [currentMonth, setCurrentMonth] = useState<number>(getCurrentMonth);
    const [currentYear, setCurrentYear] = useState<number>(getCurrentYear);
    const [mode, setMode] = useState<ECalendarMode>(ECalendarMode.Days);
    const [currentDay, setCurrentDay] = useState<number>(getCurrentDay);
    const currentPeriod: number[] = getCurrentPeriod(currentYear);

    useEffect(() => {
        setMonth(formMonthModel(currentMonth, currentYear));
    }, [currentMonth])

    const showPreviousMonth = useCallback(() => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    }, [currentMonth])

    const showPreviousYear = useCallback(() => {
        setCurrentYear(currentYear - 1);
    }, [currentYear])

    const showPreviousPeriod = useCallback(() => {
        setCurrentYear(currentYear - 12)
    }, [currentYear])

    const showNextMonth = useCallback(() => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    }, [currentMonth])

    const showNextYear = useCallback(() => {
        setCurrentYear(currentYear + 1);
    }, [currentYear])

    const showNextPeriod = useCallback(() => {
        setCurrentYear(currentYear + 12)
    }, [currentYear])

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
            <svg
                onClick={
                    mode === ECalendarMode.Days && showPreviousMonth ||
                    mode === ECalendarMode.Months && showPreviousYear ||
                    mode === ECalendarMode.Years && showPreviousPeriod
                }
                className="Arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none">
                <path
                    d="M11.0002 4.58569L3.58594 11.9999L11.0002 19.4141L12.4144 17.9999L7.41436 12.9999H20.0002V10.9999H7.41436L12.4144 5.99991L11.0002 4.58569Z"
                    fill="black"/>
            </svg>
            {
                mode === ECalendarMode.Days &&
                <div onClick={showAllMonths} className="MonthYear">{EMonths[currentMonth]} {currentYear}</div>
            }
            {mode === ECalendarMode.Months && <div onClick={showAllMonths} className="MonthYear">{currentYear}</div>}
            {
                mode === ECalendarMode.Years &&
                <div onClick={showAllMonths} className="Period">{currentPeriod[0]} - {currentPeriod[11]}</div>
            }
            <svg
                onClick={
                    mode === ECalendarMode.Days && showNextMonth ||
                    mode === ECalendarMode.Months && showNextYear ||
                    mode === ECalendarMode.Years && showNextPeriod
                }
                className="Arrow"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
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
                <ListOfDays month={month} currentDay={currentDay}/>
            </div>
        }
        {mode === ECalendarMode.Months && <AllMonths onChange={changeMonth} currentMonth={currentMonth}/>}
        {mode === ECalendarMode.Years && <Years onChange={changeYear} currentYear={currentYear}/>}
    </div>
}
