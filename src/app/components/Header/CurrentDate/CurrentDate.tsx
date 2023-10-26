import React, {FC} from "react";
import {ICurrentDate} from "./ICurrentDate";
import "./CurrentDate.scss";

export const CurrentDate: FC<ICurrentDate> = () => {
    return <div className="CurrentDate">
        <div className="LeftArrow"></div>
        <div>October 26, 2023</div>
        <div className="RightArrow"></div>
    </div>
}