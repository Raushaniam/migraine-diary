import {ReactNode} from "react";

export interface IModal {
    isShow: boolean,
    children?: ReactNode,
    height: number,
    width: number,
    onChangeVisibility: (isVisible: boolean) => void,
}