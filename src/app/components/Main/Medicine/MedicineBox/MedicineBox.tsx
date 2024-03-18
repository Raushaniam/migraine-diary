import React, {FC, useEffect, useState} from "react";
import {IMedicineBox} from "./IMedicineBox";
import {Select} from "../../../Select/Select";
import {ESelectMode} from "../../../../types/ESelectMode";

export const MedicineBox: FC<IMedicineBox> = ({numberOfBoxes}) => {
    const [boxes, setBoxes] = useState<number[]>([]);

    useEffect(() => {
        setBoxes([...boxes, boxes.length])
    }, [numberOfBoxes])

    const listOfBoxes = boxes.map((box) => {
        return <div key={box} className="MedicineBox">
            <div className="Name">
                <Select mode={ESelectMode.Name}/>
            </div>
            <div className="Dose">
                <Select mode={ESelectMode.Dose}/>
            </div>
        </div>
    });

    return listOfBoxes;
}