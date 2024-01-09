import React, {FC, useState} from "react";
import {IMenu} from "./IMenu";
import "./Menu.scss";

export const Menu: FC<IMenu> = ({title, onClick}) => {
    return <button className="Menu" onClick={onClick}>{title}</button>
}