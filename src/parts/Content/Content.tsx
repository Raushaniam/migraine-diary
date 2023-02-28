import React, {FC} from "react";
import './Content.css';
import {IContent} from "./types/IContent";
import {Case} from "../Case/Case";

export const Content: FC<IContent> = ({title}) => {
    return (
        <main className = "app__content">
            <Case title={}/>
        </main>
    );
};