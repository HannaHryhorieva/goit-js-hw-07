const inputEl = document.querySelector('#validation-input');
function onInputBlur(event) {
    const givenLengthInput = Number(inputEl.dataset.length);
    const lengthInputEl = event.currentTarget.value.length;
    
    if (lengthInputEl !== givenLengthInput) {
       inputEl.setAttribute('class', "invalid")
    } else {
        inputEl.setAttribute('class', "valid")
    };
};
inputEl.addEventListener('blur', onInputBlur);