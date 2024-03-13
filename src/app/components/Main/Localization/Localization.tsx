import React, {FC} from "react";
import "./Localization.scss";
import {ILocalization} from "./ILocalization";
import {Select} from "../../Select/Select";
import {ESelectMode} from "../../../types/ESelectMode";

export const Localization: FC<ILocalization> = ({title}) => {
    return <div className="Localization">
        <div className="Title">{title}</div>
        <Select mode={ESelectMode.Area}/>
    </div>
}