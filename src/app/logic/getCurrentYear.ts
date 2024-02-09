export const getCurrentYear = (): number => {
    const date = new Date();
    const currentYear: number = date.getFullYear();
    return currentYear;
}