import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast/dist/js/iziToast.min.js";
import "izitoast/dist/css/iziToast.min.css";


let userSelectedDate;
const button = document.querySelector("button");
button.disabled = true; 
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      userSelectedDate = selectedDates[0];
      if(userSelectedDate <= new Date()){
        button.disabled = true;
        console.log("Дата в прошлом, iziToast должен запуститься");
        iziToast.error({
          message: "Please choose a date in the future",
          position: "topRight",
        });
      } else if(userSelectedDate > new Date()) {
        button.disabled = false;
      }
    },
  };

const picker = flatpickr("#datetime-picker", options);

button.addEventListener("click", (event) => {
    const countdown = setInterval(() => {
      const now = new Date();
      const timeLeft = userSelectedDate - now;

      if (timeLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      const daysCalculate = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hoursCalculate = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutesCalculate = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, "0");
      const secondsCalculate = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

      const dataSet = document.querySelector("[data-days]");
      const dataHours = document.querySelector("[data-hours]");
      const dataMinutes = document.querySelector("[data-minutes]");
      const dataSeconds = document.querySelector("[data-seconds]");

      dataSet.textContent = daysCalculate;
      dataHours.textContent = hoursCalculate;
      dataMinutes.textContent = minutesCalculate;
      dataSeconds.textContent = secondsCalculate;
      button.disabled = true;
    }, 1000);
})

