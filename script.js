const digit_container = document.querySelector('#digit_container');
const input = document.querySelector('#input');
const output = document.createElement('p');
input.appendChild(output);
let expression;
let dotUsed = false;

for(let i = 0; i <= 9; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('digit');
    digit_container.appendChild(button);

    button.addEventListener('click', () => {
        if(expression === undefined || expression === null) {
            expression = button.textContent;
        } else {
            expression += button.textContent;
        }

        dotUsed = false;
        output.innerText = expression;
    });
}

const dot = document.createElement('button');
dot.textContent = '.';
dot.classList.add('digit');
digit_container.appendChild(dot);

dot.addEventListener('click', () => {
    if(!dotUsed) {
        expression += '.';
        output.innerText = expression;
        dotUsed = true;
    }
});

    
const sign_container = document.querySelector('#sign_container');
const signs = ['+', '-', 'x', '/'];

signs.forEach((sign) => {
    const button = document.createElement('button');
    button.textContent = sign;
    button.classList.add('sign');
    sign_container.appendChild(button);

    button.addEventListener('click', () => {
        if(expression === undefined || expression === null) {
            expression = (' ' + button.textContent + ' ');
        } else {
            expression += (' ' + button.textContent + ' ');
        }

        dotUsed = false;
        output.innerText = expression;
    });
});

const button = document.createElement('button');
button.textContent = '=';
button.classList.add('equals');
sign_container.appendChild(button);

button.addEventListener('click', () => {
    const arr = expression.split(' ');
    let result = operate(arr[0], arr[2], arr[1]);

    for(let i = 3; i < arr.length-1; i += 2) {
        result = operate(result, arr[i+1], arr[i]);
    }

    if(isNaN(result)) {
        output.innerText = 'Invalid expression';
    } else {
        result = (isInteger(result)) ? parseInt(result) : result.toFixed(1);
        output.innerText = expression + ' = ' + result;
    }

    dotUsed = false;
    expression = null;
});

const back = document.createElement('button');
back.textContent = 'back';
back.classList.add('back');
sign_container.appendChild(back);

back.addEventListener('click', () => {
    expression = expression.slice(0, expression.length-1);
    output.innerText = expression;
});

const clear = document.createElement('button');
clear.textContent = 'clear';
clear.classList.add('clear');
sign_container.appendChild(clear);

clear.addEventListener('click', () => {
    output.innerHTML = null;
    expression = null;
    dotUsed = false;
    curr = null;
});

function operate(a, b, sign) {
    if(isNaN(a) || isNaN(b)) {
        return 'Invalid';
    }

    let result;
    switch(sign) {
        case '+':
            result = add(parseFloat(a), parseFloat(b));
            break;
        case '-':
            result = subtract(parseFloat(a), parseFloat(b));
            break;
        case 'x':
            result = multiply(parseFloat(a), parseFloat(b));
            break;
        case '/':
            result = divide(parseFloat(a), parseFloat(b));
            if(result == 'Division by 0') {
                return 'Cannot divide by 0!';
            }
            break;
        default: alert('Invalid input');
    }

    if(isNaN(result)) {
        return 'Invalid expression';
    }

    return result;
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b == 0) {
        return 'Division by 0';
    }

    return a / b;
}

function isInteger(result) {
    return result - parseInt(result) === 0; 
}