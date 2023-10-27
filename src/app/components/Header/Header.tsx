import React, {FC} from "react";
import {IHeader} from "./IHeader";
import "./Header.scss";
import {SiteName} from "./SiteName/SiteName";
import {Menu} from "./Menu/Menu";
import {CurrentDate} from "./CurrentDate/CurrentDate";
import {Navigation} from "./Navigation/Navigation";

export const Header:FC<IHeader> = ({name, title}) => {
    const showDate = () => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
        const currentDate = date.toLocaleDateString(['en-US', "en-GB"], options);
        return currentDate;
    }

    return <div className="Header">
        <SiteName name={name}/>
        <CurrentDate date={showDate()}/>
        <Menu title={title} />
        <Navigation />
    </div>
}