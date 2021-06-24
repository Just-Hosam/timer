export const formatTime = (timeInSec: number): string => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if (timeInSec / 3600 > 1) {
    hours = Math.floor(timeInSec / 3600);
    timeInSec %= 3600;
  }
  if (timeInSec / 60 > 1) {
    minutes = Math.floor(timeInSec / 60);
    timeInSec %= 60;
  }
  if (timeInSec > 0) {
    seconds = timeInSec;
  }

  const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  const timeStr = `${hoursStr}:${minutesStr}:${secondsStr}`;

  return timeStr;
};
