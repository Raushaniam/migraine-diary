const date = new Date();
const currentYear: number = date.getFullYear();
const numberOfDaysInFebruary: number = new Date(currentYear, 2, 0).getDate();
export const IDaysOFTheMonth = {
    January: 31,
    February: numberOfDaysInFebruary,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
}