import React, {FC} from "react";
import {ISidebar} from "./ISidebar";
import "./Sidebar.scss";

export const Sidebar:FC<ISidebar> = ({title}) => {
    return <div className="Sidebar">{title}</div>
}