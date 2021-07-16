const result = document.getElementById("result");
const input = document.getElementById("input");
const buttons = document.querySelectorAll(".button");
const equalButton = document.querySelector(".equal")
console.log(equalButton)

for (let i = 2; i < buttons.length-1; i++) {
    buttons[i].addEventListener("click", () => {
        input.innerHTML += buttons[i].textContent
    })
};

buttons[0].addEventListener("click", () => {
    result.innerHTML = '';
    input.innerHTML = '';
});

buttons[1].addEventListener("click", () => {
    input.innerHTML = input.textContent.slice(0, -1)
});

equalButton.addEventListener("click", () => {result.innerHTML = eval(input.textContent)});
