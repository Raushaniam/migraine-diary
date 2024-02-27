import React, {FC, useCallback, useState} from "react";
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
import '../Calendar/Calendar.scss';

export const Header: FC<IHeader> = ({name, title}) => {
    const [isOnClickMenu, setIsOnClickMenu] = useState('false');
    const [isOnClickCalendar, setIsOnClickCalendar] = useState('false');

    const showMenu = useCallback(() => {
        if (isOnClickMenu === 'false') {
            setIsOnClickMenu('true')
        } else {
            setIsOnClickMenu('false')
        }
    }, [isOnClickMenu])

    const showCalendar = useCallback(() => {
        if (isOnClickCalendar === 'false') {
            setIsOnClickCalendar('true')
        } else {
            setIsOnClickCalendar('false')
        }
    }, [isOnClickCalendar])


    return <div className={isOnClickMenu === 'true' ? "Header ActiveMenu" : "Header"}>
        <SiteName name={name}/>
        <CurrentDate onClick={showCalendar}/>
        <Calendar className={isOnClickCalendar === 'true' ? "Calendar Flex" : "Calendar None"}/>
        <Menu
            title={title}
            onClick={showMenu}
        />
        <Navigation
            className={isOnClickMenu === 'true' ? "Navigation Active" : "Navigation"}
            language={Dictionary.LANGUAGE}
            eng={Dictionary.ENG}
            ru={Dictionary.RU}
            calendar={Dictionary.CALENDAR}
            onClickCalendar={showCalendar}
            configure={Dictionary.CONFIGURE}
            reports={Dictionary.REPORTS}
            notification={Dictionary.NOTIFICATION}
            logIn={Dictionary.LOG_IN}
            logOut={Dictionary.LOG_OUT}
        />
    </div>
}