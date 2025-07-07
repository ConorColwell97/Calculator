let a;
let b;
let sign;

const digit_container = document.querySelector('#digit_container');

for(let i = 0; i <= 9; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('button');
    digit_container.appendChild(button);
}

const sign_container = document.querySelector('#sign_container');
const signs = ['+', '-', 'x', '/'];
signs.forEach((sign) => {
    const button = document.createElement('button');
    button.textContent = sign;
    button.classList.add('button');
    sign_container.appendChild(button);
});

function operate(a, b, sign) {
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

    console.log(result);
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