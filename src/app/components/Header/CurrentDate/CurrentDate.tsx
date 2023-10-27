import React, {FC} from "react";
import {ICurrentDate} from "./ICurrentDate";
import "./CurrentDate.scss";

export const CurrentDate:FC<ICurrentDate> = ({date}) => {
    return <div className="CurrentDate">
        <div className="LeftArrow"></div>
        <div>{date}</div>
        <div className="RightArrow"></div>
    </div>
}