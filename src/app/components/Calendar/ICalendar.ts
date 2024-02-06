import {IMonths} from "../../types/IMonths";
import {ReactNode} from "react";
export interface ICalendar {
    month: IMonths | string,
    daysList: ReactNode[],
}