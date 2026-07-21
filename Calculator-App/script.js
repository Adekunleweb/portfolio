const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        switch (value) {
            case "C":
                currentInput = "";
                break;

            case "⌫":
                currentInput = currentInput.slice(0, -1);
                break;

            case "=":
                try {
                    currentInput = eval(
                        currentInput
                            .replace(/×/g, "*")
                            .replace(/÷/g, "/")
                            .replace(/−/g, "-")
                    ).toString();
                } catch {
                    currentInput = "Error";
                }
                break;

            default:
                currentInput += value;
        }

        display.value = currentInput;
    });
});

// Keyboard support
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        currentInput += key;
    } else if (key === "Enter") {
        event.preventDefault();
        try {
            currentInput = eval(currentInput).toString();
        } catch {
            currentInput = "Error";
        }
    } else if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
    } else if (key === "Escape") {
        currentInput = "";
    }

    display.value = currentInput;
});