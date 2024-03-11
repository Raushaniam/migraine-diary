import React, {FC} from "react";
import {IComment} from "./IComment";
import "./Comment.scss"

export const Comment: FC<IComment> = ({title}) => {
    return <div className="Comment">{title}
        <label className="Label" htmlFor="comment">
            <input className="Input" type="text" id="comment"/>
        </label>
    </div>
}