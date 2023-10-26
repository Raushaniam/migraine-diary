import React, {FC} from "react";
import {IHeader} from "./IHeader";
import "./Header.scss";
import {SiteName} from "./SiteName/SiteName";
import {Menu} from "./Menu/Menu";

export const Header: FC<IHeader> = ({name, title}) => {
    return <div className="Header">
        <SiteName name={name}/>
        <Menu title={title} />
    </div>
}