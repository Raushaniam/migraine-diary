import React, {FC} from "react";
import {INavigation} from "./INavigation";
import "./Navigation.scss";

export const Navigation:FC<INavigation> = ({language,
    notification,
    configure,
    reports,
    calendar,
    logIn,
    logOut,
    eng,
    ru}) => {

    return <div className="Navigation">
        <div>{language}: {eng} / {ru}</div>
        <div>{calendar}</div>
        <div>{configure}</div>
        <div>{reports}</div>
        <div>{notification}</div>
        <div>{logIn}</div>
        <div>{logOut}</div>
    </div>
}