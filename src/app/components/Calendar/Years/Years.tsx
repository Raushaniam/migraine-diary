import React, {FC, ReactNode} from "react";
import {IYears} from "./IYears";
import './Years.scss';

export const Years: FC<IYears> = ({onChange, currentYear}) => {
    const years: number[] = [];
    const onClick = (year: number) => {
        onChange(year);
    }

    for (let i = currentYear - 6; i <= currentYear + 5; i++) {
        years.push(i);
    }

    const allYears: ReactNode[] = years.map((year, index) => {
        if (year === currentYear) {
            return <div key={index} className="Year CurrentYear" onClick={() => onClick(year)}>{year}</div>
        }
        return <div key={index} className="Year" onClick={() => onClick(year)}>{year}</div>
    })
    return <div className="Years">{allYears}</div>;
}