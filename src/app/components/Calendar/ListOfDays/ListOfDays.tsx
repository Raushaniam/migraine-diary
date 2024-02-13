import React, {FC, ReactNode} from "react";
import {IListOfDays} from "./IListOfDays";

export const ListOfDays: FC<IListOfDays> = ({month}) => {
    const listOfDays: ReactNode[] = month.map((item, index) => {
        return item.map((day) => {
            if (day.date === 0) {
                return <div key={index} className="Day Pointer"></div>;
            }
            return <div key={index} className="Day Pointer">{day.date}</div>;
        })
    })
    return listOfDays;
}