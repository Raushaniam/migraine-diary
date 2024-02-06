import React, {FC} from "react";
import "./Time.scss";
import {ITime} from "./ITime";

export const Time: FC<ITime> = ({start, end}) => {
    return <div className="Time">
        <label className="Label" htmlFor="start-time">{start}:
            <input
                className="Input"
                type="time"
                id="start-time"
                name="start-time"
                required
            />
        </label>
        <label className="Label" htmlFor="end-time">{end}:
            <input
                className="Input"
                type="time"
                id="end-time"
                name="end-time"
            />
        </label>
    </div>;
}