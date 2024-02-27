import React, {FC} from "react";
import {INavigation} from "./INavigation";

export const Navigation: FC<INavigation> = ({
                                                language,
                                                notification,
                                                configure,
                                                reports,
                                                calendar,
                                                onClickCalendar,
                                                logIn,
                                                logOut,
                                                eng,
                                                ru,
                                                className
                                            }) => {

    return <div className={className}>
        <div>{language}: {eng} / {ru}</div>
        <div onClick={onClickCalendar}>{calendar}</div>
        <div>{configure}</div>
        <div>{reports}</div>
        <div>{notification}</div>
        <div>{logIn}</div>
        <div>{logOut}</div>
    </div>
}