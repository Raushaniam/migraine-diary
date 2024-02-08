export const getFormattedCurrentDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(['en-US', "en-GB"], options);
}