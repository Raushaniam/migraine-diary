import React, {FC, useState} from "react";
import {IScaleElement} from "./IScaleElement";
import './ScaleElement.scss';

export const ScaleElement: FC<IScaleElement> = () => {
    const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [intensity, setIntensity] = useState<number>(0);

    const changeIntensity = (value: number) => {
        setIntensity(value);
    }

    const scaleElement = array.map((item) => {
        return <div className="ScaleElement" key={item}>
            {item === intensity && <div className="ActiveElement"></div>}
            <div onClick={() => changeIntensity(item)} className="IntensityValue">
                {item}
            </div>
        </div>
    })

    return scaleElement;
}