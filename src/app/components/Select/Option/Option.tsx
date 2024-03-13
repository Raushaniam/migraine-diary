import React, {FC, ReactNode} from "react";
import './Option.scss';
import {Ioption} from "./IOption";

export const Option: FC<Ioption> = ({onClick, activeOptions, options}) => {
    const optionElements: ReactNode[] = options.map((option, index) => {
        return activeOptions.includes(option) ?
            <div key={index}
                 className="Option ActiveOption"
                 onClick={() => onClick(option, index)
                 }>{option}</div>
            :
            <div key={index}
                 className="Option"
                 onClick={() => onClick(option, index)
                 }>{option}</div>;
    })

    return optionElements;
}