import React, {FC, useState} from "react";
import {IAura} from "./IAura";
import "./Aura.scss";

export const Aura: FC<IAura> = ({title, yes, no}) => {
    const [activeButton, setActiveButton] = useState<boolean>(false);

    const chooseButton = () => {
        setActiveButton(!activeButton);
    }

    return <div className="Aura">
        <div className="Title">{title}</div>
        <div className="AuraContainer">
            <div className={activeButton ? "Active Yes" : "Yes"}
                 onClick={chooseButton}>
                {yes}
            </div>
            <div className={!activeButton ? "Active No" : "No"}
                 onClick={chooseButton}>
                {no}
            </div>
        </div>
    </div>
}