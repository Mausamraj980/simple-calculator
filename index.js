let currentInput = "0";
let historyText = "";

// ➕ INPUT (UPDATED + FIXED)
function appendToDisplay(value) {
    if (currentInput === "0") {
        currentInput = "";
    }

    currentInput += value;

    document.getElementById('equation').innerText = currentInput;
}

// ⌫ BACKSPACE
function backspace() {
    if (currentInput.length <= 1) {
        currentInput = "0";
    } else {
        currentInput = currentInput.slice(0, -1);
    }

    document.getElementById('equation').innerText = currentInput;
}

// 🧹 CLEAR
function clearDisplay() {
    currentInput = "0";
    historyText = "";

    document.getElementById('equation').innerText = "0";
    document.getElementById('english-text').innerText = "0";
}

// 🧮 CALCULATE
function calculate() {
    try {
        let result = Function("return " + currentInput)();

        document.getElementById('equation').innerText =
            currentInput + " = " + result;

        document.getElementById('english-text').innerText = result;

        currentInput = result.toString();

    } catch (error) {
        document.getElementById('english-text').innerText = "Error";
    }
}
// 🔄 +/- TOGGLE
function toggleSign() {
    if (currentInput === "0") return;

    if (currentInput.startsWith("-")) {
        currentInput = currentInput.substring(1);
    } else {
        currentInput = "-" + currentInput;
    }

    document.getElementById('equation').innerText = currentInput;
}