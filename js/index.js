const targetTime = new Date();
targetTime.setHours(targetTime.getHours() + 2);

const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
  const currentTime = new Date();
  const timeDifference = targetTime - currentTime;

  if (timeDifference <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "00:00:00";
  } else {
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const timerElement = document.getElementById("timer");
    timerElement.innerHTML = `${formatTime(hours)}:${formatTime(
      minutes
    )}:${formatTime(seconds)}`;
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

const currentDate = new Date();

const formattedDate = `${padZero(currentDate.getDate())}.${padZero(
  currentDate.getMonth() + 1
)}.${currentDate.getFullYear()}`;

document.getElementById(
  "orderDate"
).textContent = `Order date: ${formattedDate}`;

function padZero(number) {
  return number < 10 ? "0" + number : number;
}
$(".input-with-icon").inputmask("+38(099)999-99-99");
