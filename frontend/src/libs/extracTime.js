const padZero = (number) => {
    return number.toString().padStart(2, '0');
}

export const  extractTime = (dateStr) => {
    const date = new Date(dateStr);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}