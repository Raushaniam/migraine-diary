import React, {FC, ReactNode} from "react";
import {IListOfDays} from "./IListOfDays";
import './ListOfDays.scss'

export const ListOfDays: FC<IListOfDays> = ({month, currentDay}) => {
    const listOfDays: ReactNode[] = month.map((item, index) => {
        let i = 0;
        return item.map((day) => {
            i++;
            if (day.date === 0) {
                return <div key={i} className="Day Pointer"></div>;
            }
            return <div key={i} className={day.date === currentDay ? "Day Pointer CurrentDay" : "Day Pointer"}>
                {day.date}
            </div>;
        })
    })
    return <div className="ListOfDays">{listOfDays}</div>;
}