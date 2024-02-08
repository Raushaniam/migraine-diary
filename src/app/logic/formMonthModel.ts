import {IDay} from "../types/IDay";
import {IDaysOFTheMonth} from "../types/IDaysOFTheMonth";
import {IMonths} from "../types/IMonths";

export const formMonthModel = (currentMonth: number): IDay[][] => {
    const date = new Date();
    const currentYear: number = date.getFullYear();
    const numberOfDaysInAMonth = IDaysOFTheMonth[IMonths[currentMonth]];
    const firstDayOfTheCurrentMonth: number = new Date(currentYear, currentMonth, 1).getDay();
    const days: IDay[][] = [];
    let array: IDay[] = [];
    let j = 1;
    for (let i = 1; i <= 42; i++) {
        if (j < firstDayOfTheCurrentMonth || i > numberOfDaysInAMonth + (firstDayOfTheCurrentMonth - 1)) {
            array.push({date: 0});
            j++
        } else {
            array.push({date: i - firstDayOfTheCurrentMonth + 1});
        }
        if (array.length === 7) {
            days.push(array);
            if (array[6].date === 0) {
                i = 43;
            } else {
                array = [];
            }
        }
    }
    return days;
}