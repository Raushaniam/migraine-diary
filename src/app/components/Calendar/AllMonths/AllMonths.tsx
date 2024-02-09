import {IAllMonths} from "./IAllMonths";
import React, {FC, ReactNode} from "react";
import {IDaysOFTheMonth} from "../../../types/IDaysOFTheMonth";
import './AllMonth.scss';

export const AllMonths: FC<IAllMonths> = ({onChange}) => {
    const onClick = (index: number) => {
        onChange(index)
    }

    const months: string[] = Object.keys(IDaysOFTheMonth);

    const allMonths: ReactNode[] = months.map((month, index) => {
        return <div onClick={() => onClick(index)} key={index} className="Month">{month}</div>;
    })
    return <div className="AllMonths">{allMonths}</div>;
}