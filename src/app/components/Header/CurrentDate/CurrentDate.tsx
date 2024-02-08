import React, {FC, useEffect, useState} from "react";
import {ICurrentDate} from "./ICurrentDate";
import "./CurrentDate.scss";
import {getFormattedCurrentDate} from "../../../logic/getFormattedCurrentDate";

export const CurrentDate:FC<ICurrentDate> = () => {

    const [currentDate, setCurrentDate] = useState<string>('');

    useEffect(() => {
        setCurrentDate(getFormattedCurrentDate())
    }, [])

    return <div className="CurrentDate">
        <div className="LeftArrow"></div>
        <div>{currentDate}</div>
        <div className="RightArrow"></div>
    </div>
}