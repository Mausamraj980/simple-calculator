let currentInput = "";
let historyText = "";

function appendToDisplay(value) {
    if (currentInput === "0") currentInput = "";
    currentInput += value;
    document.getElementById('equation').innerText = currentInput;
}

// 🔙 BACKSPACE (FIXED)
function backspace() {
    if (currentInput === "" || currentInput === "0") return;

    currentInput = currentInput.slice(0, -1);

    if (currentInput === "") {
        currentInput = "0";
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

// 🧮 CALCULATE + INLINE HISTORY
function calculate() {
    try {
        let result = eval(currentInput);

        // 🔥 history add (top style)
        historyText =
            currentInput + " = " + result + "\n" + historyText;

        document.getElementById('equation').innerText =
            historyText + "\n" + currentInput + " = " + result;

        document.getElementById('english-text').innerText =
            numberToHindi(result);

        currentInput = result.toString();

    } catch (e) {
        document.getElementById('english-text').innerText = "Error";
    }
}

// 🔢 number to text
function numberToHindi(n) {
    const englishWords = {
        0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5",
        6: "6", 7: "7", 8: "8", 9: "9", 10: "10",
        11: "11", 12: "12", 13: "13", 14: "14", 15: "15",
        16: "16", 17: "17", 18: "18", 19: "19", 20: "20"
    };

    return englishWords[n] || n;
}