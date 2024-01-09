import React, {FC} from "react";
import {IFooter} from "./IFooter";
import "./Footer.scss";

export const Footer: FC<IFooter> = ({title}) => {
    return <div className="Footer">{title}</div>
}