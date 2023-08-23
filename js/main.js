const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

setInterval(function () {
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

  const minutes = seconds / 60;
  const minutesToDisplay = minutes % 60;

  const hours = minutes / 60;

  const days = hours / 24;

  // print times on page
  secondsEl.innerText = Math.floor(secondsToDisplay);
  minutesEl.innerText = Math.floor(minutesToDisplay);
  hoursEl.innerText = Math.floor(hours);
  daysEl.innerText = Math.floor(days);
}, 1000);
