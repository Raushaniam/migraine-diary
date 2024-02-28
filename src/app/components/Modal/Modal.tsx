import {IModal} from "./types/IModal";
import React, {FC, useEffect, useRef, useState} from "react";
import "./Modal.scss";
import {useClickOutside} from "../../hooks/useClickOutside";

export const Modal: FC<IModal> = ({width, height, isShow, children, onChangeVisibility}) => {
    const [show, setShow] = useState<boolean>(false);
    const contentRef = useRef();

    useEffect(() => {
        setShow(isShow);
    }, [isShow])

    useEffect(() => {
        onChangeVisibility(show);
    }, [show])

    useClickOutside(contentRef, () => {
        setShow(false);
    })

    return show &&
        <div className="Modal">
            <div className="Content" ref={contentRef}
                 style={{width: `${width}px`, height: `${height}px`}}>{children}</div>
        </div>
}