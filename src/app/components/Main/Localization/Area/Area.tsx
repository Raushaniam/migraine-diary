import React, {FC, ReactNode} from "react";
import {IArea} from "./IArea";
import {EAreas} from "../../../../types/EAreas";
import './Area.scss';

export const Area: FC<IArea> = ({onClick, activeAreas}) => {
    const areas: string[] = Object.values(EAreas);

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