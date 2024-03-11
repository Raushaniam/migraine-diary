import React, {FC} from "react";
import {IMain} from "./IMain";
import "./Main.scss";
import {Time} from "./Time/Time";
import {Dictionary} from "../../constants/Dictionary";
import {Intensity} from "./Intensity/Intensity";
import {Localization} from "./Localization/Localization";
import {Drug} from "./Drug/Drug";
import {Aura} from "./Aura/Aura";
import {Button} from "../Button/Button";
import {Sidebar} from "./Aside/Sidebar";
import {Comment} from "./Comment/Comment";

export const Main: FC<IMain> = () => {

    return <div className="Main">
        <Sidebar title={Dictionary.EPISODES}/>
        <div className="MainContainer">
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
            <Drug
                title={Dictionary.DRUG}
                name={Dictionary.Name}
                dose={Dictionary.DOSE}
            />
            <Aura title={Dictionary.AURA} yes={Dictionary.YES} no={Dictionary.NO}/>
            <Comment title={Dictionary.COMMENT}/>
            <Button title={Dictionary.SAVE}/>
        </div>
    </div>
}