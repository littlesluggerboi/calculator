function add(addend1, addend2){
    return addend1 + addend2;
}
function subtract(minuend, subtrahend){
    return minuend - subtrahend;
}
function multiply(multiplicand, multiplier){
    return multiplicand * multiplier;
}
function divide(dividend, divisor){
    return dividend/divisor;
}
function operate(operator, leftOperand, rightOperand){
    if(operator === '+'){
        return add(leftOperand, rightOperand);
    }else if(operator === '-'){
        return subtract(leftOperand, rightOperand);
    }else if(operator === '*'){
        return multiply(leftOperand, rightOperand);
    }else if(operator === '/'){
        return divide(leftOperand, rightOperand);
    }
}
function displayNumber(e){
    if(displayScreen.textContent.trim() === "" && e.target.textContent==="." ){
        displayScreen.textContent += "0";
    }else{
        displayScreen.textContent+=e.target.textContent;
    }
}
function clearDisplay(){
    displayScreen.textContent = '';
}

function storeNumber(){
    if(leftOperand === undefined){
        leftOperand = Number(displayScreen.textContent);
    }else{
        rightOperand = Number(displayScreen.textContent);
    }
    clearDisplay();
}
function clickedOperation(e){
    if(displayScreen.textContent.trim()===''){
    }else{
        operator = e.target.textContent;
        storeNumber();
        if(rightOperand !== undefined && leftOperand !== undefined){
            leftOperand = operate(operator, leftOperand, rightOperand);
            rightOperand = undefined;
            // displayScreen.textContent = solution.toString();
        }
    } 
}
function clickedEquals(){
    storeNumber()
    if(leftOperand !== undefined && rightOperand !== undefined){
        solution = operate(operator, leftOperand, rightOperand);
        operator = undefined;
        leftOperand = undefined;
        rightOperand = undefined;
        displayScreen.textContent = solution.toString();
    }
}

let displayScreen = document.querySelector('.display');
let operator, leftOperand, rightOperand;
const numbers = document.querySelectorAll('.number');
for(let number of numbers){
    number.addEventListener('click', displayNumber);
}

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearDisplay);

const operations = document.querySelectorAll('.operation');
for(let operation of operations){
    operation.addEventListener('click', clickedOperation);
}
const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', clickedEquals);