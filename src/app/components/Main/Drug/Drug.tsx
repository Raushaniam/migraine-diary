import React, {FC} from "react";
import {IDrug} from "./IDrug";
import "./Drug.scss";

export const Drug: FC<IDrug> = ({title, dose, name, comment}) => {
    return <div className="Drug">
        <div className="Title">{title}</div>
        <div className="DrugContainer">
            <label className="Name" htmlFor="inputName">{name}
                <input className="Input" id="inputName"/>
            </label>
            <label className="Dose" htmlFor="inputDose">{dose}
                <input className="Input" id="inputDose"/>
            </label>
            <label className="Comment" htmlFor="drugComment">{comment}
                <input className="Input" type="text" id="drugComment"/>
            </label>
        </div>
    </div>
}