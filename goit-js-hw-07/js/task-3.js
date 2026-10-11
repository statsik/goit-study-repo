const defInput = document.getElementById("name-input");
const defOutput = document.getElementById("name-output");
defInput.addEventListener("input", (event) => {
    const input = event.currentTarget.value.trim();
    if (input === "" || input === " "){
        defOutput.textContent = "Anonymus";
    } else defOutput.textContent = input;
});
console.log(defInput); 