import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputNumber = document.querySelector("input");
const form = document.querySelector(".form");


const button = document.querySelector("button");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const delay = Number(form.elements.delay.value); 
    const state = form.elements.state.value;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
              resolve(delay);
            } else {
              reject(delay);
            }
        }, delay);
    })
    promise
    .then(
        delay => {
            iziToast.success({
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: "topRight",
            });
        }
    )
    .catch(
        delay => {
            iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`,
                position: "topRight",
            });
        }
    )
    
})