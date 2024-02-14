export const getCurrentPeriod = (currentYear: number): number[] => {
    const years: number[] = [];
    for (let i = currentYear - 6; i <= currentYear + 5; i++) {
        years.push(i);
    }
    return years;
}