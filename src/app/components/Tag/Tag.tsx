import React, {FC} from "react";
import {ITag} from "./ITag";

export const Tag: FC<ITag> = ({onClickCross, tags}) => {

    const listOfTags = tags.map((tag, index) => (
        <div className="Tag" key={index}>
            <span className="Text">{tag}</span>
            <span className="Close" onClick={() => onClickCross(index)}>&times;</span>
        </div>
    ))
    return listOfTags;
}