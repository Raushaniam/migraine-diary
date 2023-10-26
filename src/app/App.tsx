import React, {FC} from "react";
import {Dictionary} from "./constants/Dictionary";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import "./App.scss";

export const App: FC = () => {
    return <div>
        <Header name={Dictionary.SITE_NAME} title={Dictionary.MENU}/>
        <Main />
        <Footer />
    </div>
}