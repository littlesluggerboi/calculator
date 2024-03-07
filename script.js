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
