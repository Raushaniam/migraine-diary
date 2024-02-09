import React, {FC, ReactNode} from "react";
import {IListOfDays} from "./IListOfDays";

export const ListOfDays: FC<IListOfDays> = ({month}) => {
    const listOfDays: ReactNode[] = month.map((item) => {
        let i = 0;
        return item.map((day) => {
            i++;
            if (day.date === 0) {
                return <div key={i.toString()} className="Day Pointer"></div>;
            }
            return <div key={i.toString()} className="Day Pointer">{day.date}</div>;
        })
    })
    return listOfDays;
}