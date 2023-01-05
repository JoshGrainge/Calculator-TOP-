let equation = "";
// Only lets one operation to be applied at a time
let symbolActive = false;

let snarkyMessage = 'Nice try ;)';

const outputText = document.querySelector('#screen-text');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', e =>{
    
    if(equation === snarkyMessage){
        equation = "";
    }
    
    if(button.textContent === '='){
        evaluate();
    }
    else if(button.textContent === 'AC' || button.textContent === 'C'){
        equation = "0";
        symbolActive = false;
    }
    else if(isNaN(parseInt(button.textContent))){
        if(symbolActive){
            evaluate();
        }
        else{
            symbolActive = true;
        }
        equation += ` ${button.textContent} `;
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
    if(b == 0){
        return "Nice try ;)";
    }

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
    let components = equation.split(' ');

    // Invalid expression will just return first number
    if(components.length < 3 || components[2] === ''){
        equation = components[0];
        return;
    }
    
    equation = operator(components[1], parseInt(components[0]), parseInt(components[2]));
}