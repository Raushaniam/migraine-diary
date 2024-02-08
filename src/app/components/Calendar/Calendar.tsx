import React, {FC, ReactNode, useEffect, useState} from 'react';
import {ICalendar} from "./ICalendar";
import './Calendar.scss';
import {IMonths} from "../../types/IMonths";
import {IDay} from "../../types/IDay";
import {IAbbreviatedNameOfTheDay} from "../../types/IAbbreviatedNameOfTheDay";
import {formMonthModel} from "../../logic/formMonthModel";

export const Calendar: FC<ICalendar> = () => {

    const [monthName, setMonthName] = useState('');
    const [month, setMonth] = useState<IDay[][]>([[]]);
    const [currentMonth, setCurrentMonth] = useState<number>(0);
    const week: string[] = Object.keys(IAbbreviatedNameOfTheDay);

    const dayOfTheWeek: ReactNode[] = week.map((day) => {
        return <div key={IAbbreviatedNameOfTheDay[day]} className="DayOfTheWeek Day">{day}</div>;
    })

    const listOfDays: ReactNode[] = month.map((item) => {
        let i = 0;
        return item.map((day) => {
            i++;
            if (day.date === 0) {
                return <div key={i.toString()} className="Day"></div>;
            }
            return <div key={i.toString()} className="Day">{day.date}</div>;
        })
    })

    useEffect(() => {
        setMonthName(IMonths[currentMonth]);
    }, [])

    useEffect(() => {
        setMonth(formMonthModel(currentMonth));
    }, [currentMonth])

    return <div className="Calendar">
        <div className="MonthContainer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M11.0002 4.58569L3.58594 11.9999L11.0002 19.4141L12.4144 17.9999L7.41436 12.9999H20.0002V10.9999H7.41436L12.4144 5.99991L11.0002 4.58569Z"
                    fill="black"/>
            </svg>
            <div className="Month">{monthName}</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M13 4.58569L20.4142 11.9999L13 19.4141L11.5858 17.9999L16.5858 12.9999H4V10.9999H16.5858L11.5858 5.99991L13 4.58569Z"
                    fill="black"/>
            </svg>
        </div>
        <div className="MonthTable">
            <>{dayOfTheWeek}</>
            <>{listOfDays}</>
        </div>
    </div>
}
