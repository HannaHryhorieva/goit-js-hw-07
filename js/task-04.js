const counterValue = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
let counter = 0;

const increment = function (){
    counter += 1;
    return counterValue.textContent = `${counter}`
};
const decrement = function (){
    counter -= 1;
    return counterValue.textContent = `${counter}`
};
btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
