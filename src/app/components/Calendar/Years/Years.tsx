import React, {FC, ReactNode, useMemo} from "react";
import {IYears} from "./IYears";
import './Years.scss';
import {getCurrentPeriod} from "../../../logic/getCurrentPeriod";

export const Years: FC<IYears> = ({onChange, currentYear}) => {
    const onClick = (year: number) => {
        onChange(year);
    }

    const allYears: ReactNode[] = useMemo(() => {
        return getCurrentPeriod(currentYear).map((year, index) => {
            if (year === currentYear) {
                return <div key={index} className="Year CurrentYear" onClick={() => onClick(year)}>{year}</div>
            }
            return <div key={index} className="Year" onClick={() => onClick(year)}>{year}</div>
        })
    }, [currentYear])
    return <div className="Years">{allYears}</div>;
}