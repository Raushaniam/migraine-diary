import React, {FC} from "react";
import {ISiteName} from "./ISiteName";
import "./SiteName.scss";

export const SiteName: FC<ISiteName> = ({name}) => {
    return <div className="SiteName">
        <div className="SiteLogo"></div>
        <div>{name}</div>
    </div>
}