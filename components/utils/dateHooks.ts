export const getYears = (date: string): number => {
    const currentDate = new Date();
    const setData = new Date(date).getTime();
    return Math.floor((currentDate.getTime() - setData) / 3.15576e+10);
};