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

  //  add "0" before number if it < 10
  if (secondsEl.innerText < 10) {
    secondsEl.innerText = "0" + secondsEl.innerText;
  }
  if (minutesEl.innerText < 10) {
    minutesEl.innerText = "0" + minutesEl.innerText;
  }
  if (hoursEl.innerText < 10) {
    hoursEl.innerText = "0" + hoursEl.innerText;
  }
  if (daysEl.innerText < 10) {
    daysEl.innerText = "0" + daysEl.innerText;
  }
}, 1000);
