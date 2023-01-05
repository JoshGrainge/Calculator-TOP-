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
    
        case '*':
            operation = multiply;
            break;
    
        case '/':
            operation = divide;
            break;
    
        default:
            console.log("Improper operator used, please enter a valid operator");
            return; // Do not execute operation below
    }

    return operation(a, b);
}