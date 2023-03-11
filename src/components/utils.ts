function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
}

export const convertMsToTime = (hundredMils: number): string => {
    let seconds = Math.floor(hundredMils / 100);
    let minutes = Math.floor(seconds / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}:${padTo2Digits(
        hundredMils % 100
    )}`;
};
