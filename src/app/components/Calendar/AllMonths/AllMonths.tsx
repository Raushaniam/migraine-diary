import {IAllMonths} from "./IAllMonths";
import React, {FC, ReactNode} from "react";
import {IDaysOFTheMonth} from "../../../types/IDaysOFTheMonth";
import './AllMonth.scss';

export const AllMonths: FC<IAllMonths> = () => {
    const months: string[] = Object.keys(IDaysOFTheMonth);
    const allMonths: ReactNode[] = months.map((month) => {
        return <div key={IDaysOFTheMonth[month].toString()} className="Month">{month}</div>;
    })
    return <div className="AllMonths">{allMonths}</div>;
}