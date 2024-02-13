import React, {FC, ReactNode} from "react";
import {IListOfDays} from "./IListOfDays";
import './ListOfDays.scss'

export const ListOfDays: FC<IListOfDays> = ({month, currentDay}) => {
    const listOfDays: ReactNode[] = month.map((item, index) => {
        return item.map((day) => {
            if (day.date === 0) {
                return <div key={index} className="Day Pointer"></div>;
            }
            return <div key={index} className={day.date === currentDay ? "Day Pointer CurrentDay" : "Day Pointer"}>
                {day.date}
            </div>;
        })
    })
    return listOfDays;
}