import React, {FC, ReactNode} from "react";
import {IName} from "./IName";
import './Name.scss';
import {EDrugNames} from "../../../../types/EDrugNames";

export const Name: FC<IName> = ({onClick, activeAreas}) => {
    const areas: string[] = Object.values(EDrugNames);

    const areaElements: ReactNode[] = areas.map((area, index) => {
        return activeAreas.includes(area) ?
            <div key={index}
                 className="Area ActiveArea"
                 onClick={() => onClick(area, index)}>
                {area}</div>
            :
            <div key={index}
                 className="Area"
                 onClick={() => onClick(area, index)}>
                {area}</div>;
    })

    return areaElements;
}