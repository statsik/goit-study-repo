const registerForm = document.querySelector(".login-form");
const registerInput = document.querySelectorAll("input");

registerForm.addEventListener("submit", onRegisterSubmit);
function onRegisterSubmit(event) {
    event.preventDefault();
    const foms = {};
    for (const values of registerInput) {
        if (values.value.trim() === "") {
            alert("All form fields must be filled in");
            return;
        } 
        foms[values.name] = values.value.trim();
    }
    event.currentTarget.reset();
}