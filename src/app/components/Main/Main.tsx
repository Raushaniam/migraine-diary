import React, {FC} from "react";
import {IMain} from "./IMain";
import "./Main.scss";
import {Time} from "./Time/Time";
import {Dictionary} from "../../constants/Dictionary";
import {Intensity} from "./Intensity/Intensity";

export const Main: FC<IMain> = () => {
    return <div className="Main">
        <Time start={Dictionary.START} end={Dictionary.END}/>
        <Intensity title={Dictionary.INTENSITY}/>
    </div>
}