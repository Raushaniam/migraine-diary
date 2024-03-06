import React, {FC} from "react";
import "./Localization.scss";
import {ILocalization} from "./ILocalization";
import {Area} from "./Area/Area";

export const Localization: FC<ILocalization> = ({title}) => {
    return <div className="Localization">
        <div className="Title">{title}</div>
        <Area/>
    </div>
}