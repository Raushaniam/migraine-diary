import React, {FC} from 'react';
import {ICalendar} from "./ICalendar";
import './Calendar.scss';

export const Calendar: FC<ICalendar> = ({month, daysList}) => {
    return <div className="Calendar">
        <div className="Month">{month}</div>
        <div className="MonthTable">
            <div className="DayOfTheWeek Day">Mo</div>
            <div className="DayOfTheWeek Day">Tu</div>
            <div className="DayOfTheWeek Day">We</div>
            <div className="DayOfTheWeek Day">Th</div>
            <div className="DayOfTheWeek Day">Fr</div>
            <div className="DayOfTheWeek Day">Sa</div>
            <div className="DayOfTheWeek Day">Su</div>
            <>{daysList}</>
        </div>
    </div>
}
