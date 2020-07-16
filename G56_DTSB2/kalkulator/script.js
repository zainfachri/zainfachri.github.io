const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

numbers.forEach((number)=> {
    number.addEventListener("click", (event)=> {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});
const inputNumber = (number)=> {
    if(currentNumber === '0'){
        currentNumber = number;
    } else{
        currentNumber += number;
    }
}

const operator = document.querySelectorAll(".operator");

operator.forEach((operator)=> {
    operator.addEventListener("click", (event)=> {
        inputOperator(event.target.value);
    })
})

const inputOperator = (operator)=> {
    if(calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', ()=> {
    calculate();
    updateScreen(currentNumber);
});

const calculate = ()=> {
    let result = '';
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', ()=> {
    clearAll();
    updateScreen(currentNumber);
});

const clearAll = ()=> {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event)=> {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot)=> {
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
}