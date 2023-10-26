import React, {FC} from "react";
import {IMenu} from "./IMenu";
import "./Menu.scss";

export const Menu: FC<IMenu> = ({title}) => {
    return <div>{title}</div>
}