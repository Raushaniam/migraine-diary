import React, {FC} from "react";
import {IMedicineBox} from "./IMedicineBox";
import {Select} from "../../../Select/Select";
import {ESelectMode} from "../../../../types/ESelectMode";

export const MedicineBox: FC<IMedicineBox> = () => {
    return <div className="MedicineBox">
        <div className="Name">
            <Select mode={ESelectMode.Name}/>
        </div>
        <div className="Dose">
            <Select mode={ESelectMode.Dose}/>
        </div>
    </div>;
}