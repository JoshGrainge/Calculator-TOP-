let equation = "";
// Only lets one operation to be applied at a time
let symbolActive = false;

const outputText = document.querySelector('#screen-text');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', e =>{
    if(button.textContent === '='){
        console.log('equals');
        evaluate();
    }
    else if(button.textContent === 'AC'){
        console.log('cleared');
        equation = "";
    }
    else if(isNaN(parseInt(button.textContent))){
        if(!symbolActive){
            symbolActive = true;
            console.log('symbol adds');
            equation += ` ${button.textContent} `;
        }
    }
    else{
        console.log('number adds');
        equation += button.textContent;
    }

    outputText.textContent = equation;
}));

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operator(operator, a, b){
    
    let operation = null;

    switch(operator){
        case '+':
            operation = add;
            break;
    
        case '-':
            operation = subtract;
            break;
    
        case '×':
            operation = multiply;
            break;
    
        case '÷':
            operation = divide;
            break;
    
        default:
            console.log("Improper operator used, please enter a valid operator");
            return; // Do not execute operation below
    }

    return operation(a, b);
}

function evaluate(){

}