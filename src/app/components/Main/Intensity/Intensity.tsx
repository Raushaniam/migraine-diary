import React, {FC} from "react";
import {IIntensity} from "./IIntensity";
import "./Intensity.scss";
import {Scale} from "./Scale/Scale";

export const Intensity: FC<IIntensity> = ({title}) => {

    return <div className="Intensity">
        <div className="Title">{title}</div>
        <Scale/>
    </div>
}