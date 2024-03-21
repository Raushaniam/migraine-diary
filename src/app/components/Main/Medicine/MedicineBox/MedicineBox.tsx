import React, {FC, useEffect, useState} from "react";
import {IMedicineBox} from "./IMedicineBox";
import {Select} from "../../../Select/Select";
import {ESelectMode} from "../../../../types/ESelectMode";
import {v4 as uuidv4} from 'uuid';
import {MedicineNames} from "../../../../constants/MedicineNames";
import {MedicationDoses} from "../../../../constants/MedicationDoses";

export const MedicineBox: FC<IMedicineBox> = ({numberOfBoxes}) => {
    const [boxes, setBoxes] = useState<number[]>([]);

    useEffect(() => {
        setBoxes([...boxes, uuidv4()])
    }, [numberOfBoxes])

    const removeMedicineBox = (box) => {
        console.log(box);
        if (boxes.length > 1) {
            setBoxes(boxes.filter((item) => item !== box))
        }
    }

    const listOfBoxes = boxes.map((box) => {
        return <div key={box} className="MedicineBox">
            <div className="Name">
                <Select mode={ESelectMode.SingleInput} options={Object.values(MedicineNames)}/>
            </div>
            <div className="Dose">
                <Select mode={ESelectMode.SingleInput} options={Object.values(MedicationDoses)}/>
            </div>
            <div onClick={() => removeMedicineBox(box)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="10px" viewBox="0 0 50 50">
                    <path
                        d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                </svg>
            </div>
        </div>
    });

    return listOfBoxes;
}