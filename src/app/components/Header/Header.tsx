import React, {FC, ReactNode, useState} from "react";
import {IHeader} from "./IHeader";
import "./Header.scss";
import {SiteName} from "./SiteName/SiteName";
import {Menu} from "./Menu/Menu";
import {CurrentDate} from "./CurrentDate/CurrentDate";
import {Navigation} from "./Navigation/Navigation";
import {Dictionary} from "../../constants/Dictionary";
import './Navigation/Navigation.scss';
import './Menu/Menu.scss';
import {Calendar} from "../Calendar/Calendar";
import {IMonths} from "../../types/IMonths";

export const Header:FC<IHeader> = ({name, title}) => {
    const [isOnClick, setIsOnClick] = useState('false');
    const date = new Date();
    const monthNumber = date.getMonth();

    const days:number[] = [];
    for (let i = 1; i <= 42; i++) {
        days.push(i);
    }

    const listOfDays:ReactNode[] = days.map((day, index) => {
        return <div key={index.toString()} className="Day"></div>;
    })

    const showDate = () => {
        const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString(['en-US', "en-GB"], options);
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
        <CurrentDate date={showDate()} />
        <Calendar month={IMonths[monthNumber]} daysList={listOfDays}/>
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