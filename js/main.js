// get dates
const today = new Date();
const tomorrowCorrection = new Date("2023-08-24 9:30");

// save dates as milliseconds since 1970
const todayInMs = today.getTime();
const tomorrowCorrectionInMs = tomorrowCorrection.getTime();

// find time remaining from now to Aug 24 2023 9:30am (in ms)
const timeRemainingInMs = tomorrowCorrectionInMs - todayInMs;

// find time remaining in seconds, minutes, hours, days
const seconds = timeRemainingInMs / 1000;
const secondsToDisplay = seconds % 60;
console.log(Math.floor(secondsToDisplay));

const minutes = seconds / 60;
const minutesToDisplay = minutes % 60;
console.log(Math.floor(minutesToDisplay));

const hours = minutes / 60;
console.log(Math.floor(hours));

const days = hours / 24;
console.log(Math.floor(days));
