import React, {FC, useState} from "react";
import {IHeader} from "./IHeader";
import "./Header.scss";
import {SiteName} from "./SiteName/SiteName";
import {Menu} from "./Menu/Menu";
import {CurrentDate} from "./CurrentDate/CurrentDate";
import {Navigation} from "./Navigation/Navigation";
import {Dictionary} from "../../constants/Dictionary";
import './Navigation/Navigation.scss';
import './Menu/Menu.scss';


export const Header:FC<IHeader> = ({name, title}) => {

    const [isOnClick, setIsOnClick] = useState('false');

    const showDate = () => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
        const currentDate = date.toLocaleDateString(['en-US', "en-GB"], options);
        return currentDate;
    }

    const showMenu = () => {
        if(isOnClick === 'false') {
            setIsOnClick('true')
        } else {
            setIsOnClick('false')
        }
    }

    return <div className={isOnClick === 'true' ? "Header ActiveMenu" : "Header"}>
        <SiteName name={name}/>
        <CurrentDate date={showDate()}/>
        <Menu
            title={title}
            onClick={() => showMenu()}
        />
        <Navigation
            className={isOnClick === 'true' ? "Navigation Active" : "Navigation"}
            language={Dictionary.LANGUAGE}
            eng={Dictionary.ENG}
            ru={Dictionary.RU}
            calendar={Dictionary.CALENDAR}
            configure={Dictionary.CONFIGURE}
            reports={Dictionary.REPORTS}
            notification={Dictionary.NOTIFICATION}
            logIn={Dictionary.LOG_IN}
            logOut={Dictionary.LOG_OUT}
        />
    </div>
}