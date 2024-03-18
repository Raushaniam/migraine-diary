import React, {FC} from "react";
import {IMedicine} from "./IMedicine";
import "./Medicine.scss";
import {Select} from "../../Select/Select";
import {ESelectMode} from "../../../types/ESelectMode";
import {Dictionary} from "../../../constants/Dictionary";

export const Medicine: FC<IMedicine> = ({title}) => {
    return <div className="Medicine">
        <div className="Title">{title}</div>
        <div className="MedicineContainer">
            <div className="MedicineBox">
                <div className="Name">{Dictionary.Name}</div>
                <div className="Dose">{Dictionary.DOSE}</div>
            </div>
            <div className="MedicineBox">
                <span className="Name">
                    <Select mode={ESelectMode.Name}/>
                </span>
                <span className="Dose">
                    <Select mode={ESelectMode.Dose}/>
                </span>
            </div>
            <svg className="Pluse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px"
                 height="24px">
                <path
                    d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z"/>
            </svg>
        </div>
    </div>
}