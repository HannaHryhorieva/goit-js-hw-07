const refs = {
    inputEl: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output')
};
function onInputChange(event) {
    const valueInput = event.currentTarget.value;
    if (valueInput === '') {
        return refs.nameEl.textContent = 'незнакомец';
    } else {return refs.nameEl.textContent = valueInput;}
    
};
refs.inputEl.addEventListener('input', onInputChange);