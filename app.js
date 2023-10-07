const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const s = (seconds / 60) * 360 + 90;
  secondsElement.style.transform = `rotate(${s}deg)`;

  const minutes = now.getMinutes();
  const m = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minutesElement.style.transform = `rotate(${m}deg)`;

  const hours = now.getHours();
  const h = (hours / 60) * 360 + (minutes / 60) * 30 + 90;
  hoursElement.style.transform = `rotate(${h}deg)`;
};

setInterval(setDate, 1000);
setDate();
