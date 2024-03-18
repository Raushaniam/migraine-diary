import React, {FC} from "react";
import {ITag} from "./ITag";
import "./Tag.scss";

export const Tag: FC<ITag> = ({onClickCross, tags}) => {

    const listOfTags = tags.map((tag, index) => (
        <span className="Tag" key={index}>
            <span className="Text">{tag}</span>
            <span className="Close" onClick={() => onClickCross(index)}></span>
        </span>
    ))
    return listOfTags;
}