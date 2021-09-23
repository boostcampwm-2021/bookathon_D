export const formatTime = (timeInSecond) => {
    const hours = String(Math.floor(timeInSecond / 3600)).padStart(2, '0');
    timeInSecond %= 3600;
    const minutes = String(Math.floor(timeInSecond / 60)).padStart(2, '0');
    const seconds = String(timeInSecond % 60).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}