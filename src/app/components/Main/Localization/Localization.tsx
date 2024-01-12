import React, {FC} from "react";
import "./Localization.scss";
import {ILocalization} from "./ILocalization";

export const Localization: FC<ILocalization> = ({
                                                    title,
                                                    crown,
                                                    forehead,
                                                    temples,
                                                    leftTemple,
                                                    rightTemple,
                                                    eyes,
                                                    face,
                                                    back,
                                                    other
                                                }) => {
    return <div className="Localization">
        <div className="Title">{title}</div>
        <div className="ListOfLocalizations">
            <div className="Area">{forehead}</div>
            <div className="Area">{back}</div>
            <div className="Area">{temples}</div>
            <div className="Area">{leftTemple}</div>
            <div className="Area">{rightTemple}</div>
            <div className="Area">{crown}</div>
            <div className="Area">{face}</div>
            <div className="Area">{eyes}</div>
            <label className="Area" htmlFor="area">
                {other}<input className="InputArea" type="text" id="area"/>
            </label>
        </div>
    </div>
}