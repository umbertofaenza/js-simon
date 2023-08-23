const today = new Date();
const tomorrowCorrection = new Date("2023-08-24 9:30");

const todayInMs = today.getTime();
console.log(todayInMs);

const tomorrowCorrectionInMs = tomorrowCorrection.getTime();
console.log(tomorrowCorrectionInMs);
