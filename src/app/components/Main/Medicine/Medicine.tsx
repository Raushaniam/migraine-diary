import React, {FC, useState} from "react";
import {IMedicine} from "./IMedicine";
import "./Medicine.scss";
import {Dictionary} from "../../../constants/Dictionary";
import {MedicineBox} from "./MedicineBox/MedicineBox";

export const Medicine: FC<IMedicine> = ({title}) => {
    const [numberOfBoxes, setNumberOfBoxes] = useState<number>(0);

    const addMedicineBox = () => {
        setNumberOfBoxes(numberOfBoxes + 1);
    }

    return <div className="Medicine">
        <div className="Title">{title}</div>
        <div className="MedicineContainer">
            <div className="MedicineBox">
                <div className="Name">{Dictionary.Name}</div>
                <div className="Dose">{Dictionary.DOSE}</div>
            </div>
            <MedicineBox numberOfBoxes={numberOfBoxes}/>
            <svg onClick={addMedicineBox} className="Pluse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 width="24px"
                 height="24px">
                <path
                    d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z"/>
            </svg>
        </div>
    </div>
}