import React, {FC} from "react";
import {IAura} from "./IAura";
import "./Aura.scss";

export const Aura: FC<IAura> = ({title, yes, no}) => {
    return <div className="Aura">
        <div className="Title">{title}</div>
        <div className="AuraContainer">
            <label className="Yes" htmlFor="inputYes">{yes}
                <input className="Input" type="radio" id="inputYes"/>
            </label>
            <label className="No" htmlFor="inputNo">{no}
                <input className="Input" type="radio" id="inputNo"/>
            </label>
        </div>
    </div>
}