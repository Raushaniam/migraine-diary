import React, {FC} from "react";
import {IIntensity} from "./IIntensity";
import "./Intensity.scss";
import {ScaleElement} from "./ScaleElement/ScaleElement";

export const Intensity: FC<IIntensity> = ({title}) => {

    return <div className="Intensity">
        <div className="Title">{title}</div>
        <div className="Scale">
            <ScaleElement/>
        </div>
    </div>
}