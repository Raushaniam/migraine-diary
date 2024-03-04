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
import {Modal} from "../Modal/Modal";

export const Header: FC<IHeader> = ({name, title}) => {
    const [isShowMenu, setShowingMenu] = useState<boolean>(false);
    const [isShowCalendar, setShowingCalendar] = useState<boolean>(false);

    const showMenu = useCallback(() => {
        setShowingMenu(!isShowMenu);
    }, [isShowMenu])

    const showCalendar = useCallback(() => {
        setShowingMenu(false);
        if (!isShowCalendar) {
            setShowingCalendar(true);
        }
    }, [isShowCalendar])

    const onChangeVisibility = useCallback((isVisible: boolean) => {
        setShowingCalendar(isVisible);
    }, [])

    return <div className={isShowMenu ? "Header ActiveMenu" : "Header"}>
        <SiteName name={name}/>
        <CurrentDate onClick={showCalendar}/>
        <Modal onChangeVisibility={onChangeVisibility} isShow={isShowCalendar} width={296}
               height={284}><Calendar/></Modal>
        <Menu
            title={title}
            onClick={showMenu}
        />
        <Navigation
            className={isShowMenu ? "Navigation Active" : "Navigation"}
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