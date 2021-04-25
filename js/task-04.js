const counterValue = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const increment = function (){
    let value = Number(counterValue.textContent);
    value += 1;
    return counterValue.textContent = `${value}`
};
const decrement = function (){
    let value = Number(counterValue.textContent);
    value = value - 1;
    return counterValue.textContent = `${value}`
};
btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
