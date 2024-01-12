import React, {FC} from "react";
import {IMain} from "./IMain";
import "./Main.scss";
import {Time} from "./Time/Time";
import {Dictionary} from "../../constants/Dictionary";
import {Intensity} from "./Intensity/Intensity";
import {Localization} from "./Localization/Localization";

export const Main: FC<IMain> = () => {
    return <div className="Main">
        <Time start={Dictionary.START} end={Dictionary.END}/>
        <Intensity title={Dictionary.INTENSITY}/>
        <Localization
            title={Dictionary.LOCALIZATION}
            back={Dictionary.BACK}
            crown={Dictionary.CROWN}
            eyes={Dictionary.EYES}
            face={Dictionary.FACE}
            forehead={Dictionary.FOREHEAD}
            leftTemple={Dictionary.LEFT_TEMPLE}
            other={Dictionary.OTHER}
            rightTemple={Dictionary.RIGHT_TEMPLE}
            temples={Dictionary.TEMPLES}
        />
    </div>
}