const digit_container = document.querySelector('#digit_container');
const input = document.querySelector('#input');
const output = document.createElement('p');
input.appendChild(output);
let expression;

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
        output.innerText = expression;
    });
}

const sign_container = document.querySelector('#sign_container');
const signs = ['+', '-', 'x', '/'];

signs.forEach((sign) => {
    const button = document.createElement('button');
    button.textContent = sign;
    button.classList.add('sign');
    sign_container.appendChild(button);

    button.addEventListener('click', () => {
        expression += (' ' + button.textContent + ' ');
        output.innerText = expression;
    });
});

const button = document.createElement('button');
button.textContent = '=';
button.classList.add('equals');
sign_container.appendChild(button);

button.addEventListener('click', () => {
    const arr = expression.split(' ');
    output.innerText = expression + ' = ' + operate(arr[0], arr[1], arr[2]);
    expression = null;
});

function operate(a, sign, b) {
    let result;

    switch(sign) {
        case '+':
            result = add(parseInt(a), parseInt(b));
            break;
        case '-':
            result = subtract(parseInt(a), parseInt(b));
            break;
        case 'x':
            result = multiply(parseInt(a), parseInt(b));
            break;
        case '/':
            result = divide(parseInt(a), parseInt(b));
            break;
        default: alert('Invalid input');
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
        return 'Cannot divide by zero';
    }

    return a / b;
}