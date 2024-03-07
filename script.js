function add(addend1, addend2) {
    return addend1 + addend2;
}
function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}
function multiply(multiplicand, multiplier) {
    return multiplicand * multiplier;
}
function divide(dividend, divisor) {
    return dividend / divisor;
}
function operate(operator, leftOperand, rightOperand) {
    let solution;
    if (operator === '+') {
        solution = add(leftOperand, rightOperand);
    } else if (operator === '-') {
        solution = subtract(leftOperand, rightOperand);
    } else if (operator === '*') {
        solution = multiply(leftOperand, rightOperand);
    } else if (operator === '/') {
        solution = divide(leftOperand, rightOperand);
    }
    // solution = Number(solution.toString().substr(0, 12));
    return solution;
}
function displayNumber(e) {
    if (displayScreen.textContent.trim() === "" && e.target.textContent === ".") {
        displayScreen.textContent += "0";
    } else if (displayScreen.textContent.trim().length > 12) {
    } else if (displayScreen.textContent.trim().includes(".") && e.target.textContent === ".") {
    } else {
        displayScreen.textContent += e.target.textContent;
    }
}
function clearDisplay() {
    displayScreen.textContent = '';
}

function storeNumber() {
    if (leftOperand === undefined) {
        leftOperand = Number(displayScreen.textContent);
    } else {
        rightOperand = Number(displayScreen.textContent);
    }
}
function clickedClear() {
    clearDisplay();
    clearExpression();
}
function clickedOperation(e) {
    storeNumber();
    clearDisplay();
    if (leftOperand !== undefined && rightOperand !== undefined) {
        leftOperand = operate(operator, leftOperand, rightOperand);
        rightOperand = undefined;
    }
    operator = e.target.textContent;
}
function clearExpression() {
    leftOperand = undefined;
    rightOperand = undefined;
    operator = undefined;
}

function clickedEquals() {
    storeNumber();
    
    let solution = operate(operator, leftOperand, rightOperand);
    displayScreen.textContent = solution.toString();
    clearExpression();
}

let displayScreen = document.querySelector('.display');
let operator, leftOperand, rightOperand;
const numbers = document.querySelectorAll('.number');
for (let number of numbers) {
    number.addEventListener('click', displayNumber);
}

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clickedClear);

const operations = document.querySelectorAll('.operation');
for (let operation of operations) {
    operation.addEventListener('click', clickedOperation);
}
const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', clickedEquals);