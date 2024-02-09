import React, {FC, ReactNode} from "react";
import {IDaysOfTheWeek} from "./IDaysOfTheWeek";
import {EAbbreviatedNameOfTheDay} from "../../../types/EAbbreviatedNameOfTheDay";
import './DaysOfTheWeek.scss';

export const DaysOfTheWeek: FC<IDaysOfTheWeek> = () => {
    const week: string[] = Object.keys(EAbbreviatedNameOfTheDay);

    const dayOfTheWeek: ReactNode[] = week.map((day) => {
        return <div key={EAbbreviatedNameOfTheDay[day]} className="DayOfTheWeek Day">{day}</div>;
    })

    return dayOfTheWeek;
}
