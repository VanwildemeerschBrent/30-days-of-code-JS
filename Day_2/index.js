(function() {
  const hourHand = document.querySelector(".hour-hand");
  const minHand = document.querySelector(".min-hand");
  const secondHand = document.querySelector(".second-hand");

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = (minutes / 60) * 360;
    const hourDegrees = (hour / 12) * 360;

    secondHand.style.transform = `rotate(${secondDegrees + 90}deg)`;
    minHand.style.transform = `rotate(${minuteDegrees + 90}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees + 90}deg)`;
  }

  setInterval(setDate, 1000);
})();
