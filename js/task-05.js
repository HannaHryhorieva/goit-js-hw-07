const refs = {
    inputEl: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output')
};
function onInputChange(event) {
    const valueInput = event.currentTarget.value;
    if (valueInput === '') {
        refs.nameEl.textContent = 'незнакомец';
    } else {refs.nameEl.textContent = valueInput;}
    
};
refs.inputEl.addEventListener('input', onInputChange);