const expressionDisplay = document.getElementById('expression');
const resultDisplay = document.getElementById('result');

let currentExpression = '';
let currentResult = '0';
let openBracket = true;

function updateDisplay() {
    expressionDisplay.innerText = currentExpression;
    resultDisplay.innerText = currentResult;
}

function appendValue(value) {
    if (currentExpression === '' && ['*', '/', '%', '+'].includes(value)) {
        return;
    }
    currentExpression += value;
    updateDisplay();
}

function toggleBracket() {
    if (openBracket) {
        currentExpression += '(';
        openBracket = false;
    } else {
        currentExpression += ')';
        openBracket = true;
    }
    updateDisplay();
}

function clearScreen() {
    currentExpression = '';
    currentResult = '0';
    openBracket = true;
    updateDisplay();
}

function calculate() {
    try {
        let computeStr = currentExpression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/%/g, '/100');

        let evalResult = eval(computeStr);

        if (evalResult === undefined || isNaN(evalResult)) {
            currentResult = 'Lỗi';
        } else {
            currentResult = evalResult;
        }
    } catch (error) {
        currentResult = 'Lỗi';
    }
    updateDisplay();
}