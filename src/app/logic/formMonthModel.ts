import {IDay} from "../types/IDay";
import {IDaysOFTheMonth} from "../types/IDaysOFTheMonth";
import {EMonths} from "../types/EMonths";

export const formMonthModel = (currentMonth: number, currentYear: number): IDay[][] => {
    let numberOfDaysInAMonth = IDaysOFTheMonth[EMonths[currentMonth]];
    if (currentMonth === 1) {
        numberOfDaysInAMonth = new Date(currentYear, 2, 0).getDate();
    }

    let firstDayOfTheCurrentMonth: number = new Date(currentYear, currentMonth, 1).getDay();
    const days: IDay[][] = [];
    let array: IDay[] = [];
    let j = 1;
    for (let i = 1; i <= 42; i++) {
        if (firstDayOfTheCurrentMonth === 0) {
            firstDayOfTheCurrentMonth = 7;
        }
        if (j < firstDayOfTheCurrentMonth || i > numberOfDaysInAMonth + (firstDayOfTheCurrentMonth - 1)) {
            array.push({date: 0});
            j++
        } else {
            array.push({date: i - firstDayOfTheCurrentMonth + 1});
        }
        if (array.length === 7) {
            days.push(array);
            if (array[6].date === 0 || array[6].date === numberOfDaysInAMonth) {
                i = 43;
            } else {
                array = [];
            }
        }
    }
    return days;
}