import React, {FC} from "react";
import {IDrug} from "./IDrug";
import "./Drug.scss";
import {Select} from "../../Select/Select";
import {ESelectMode} from "../../../types/ESelectMode";

export const Drug: FC<IDrug> = ({title}) => {
    return <div className="Drug">
        <div className="Title">{title}</div>
        <div className="DrugContainer">
            <div className="DrugBox">
                <Select mode={ESelectMode.Name}/>
                <Select mode={ESelectMode.Dose}/>
            </div>
        </div>
    </div>
}