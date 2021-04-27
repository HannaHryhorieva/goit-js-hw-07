const valueInput = document.querySelector('#controls input');
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const divParent = document.querySelector('#boxes');
let amount = 0;
const onValueInput = function (event) {
    amount = Number(event.currentTarget.value);
    // console.log(amount);
    return amount
};
valueInput.addEventListener('input', onValueInput);
// console.log(amount);
let color = '';
const makeColor = function () {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        color = `(${r}, ${g}, ${b})`;
        return color;
    };
    console.log(makeColor());
const createBoxes = function (num) {
    const arrayDivMarkup = [];
    for (let i = 0; i < num; i += 1){
        const sizeDiv = 30 + i * 10;
        const divMarkup = `<div class="div-collection" 
       style="width: ${sizeDiv}px; height: ${sizeDiv}px; 
       background-color: ${makeColor};"></div>`;
        arrayDivMarkup.push(divMarkup);   
    };
    return arrayDivMarkup.join('')
};
console.log(createBoxes(5));
const onDivGallery = function () {
    divParent.insertAdjacentHTML('afterbegin', createBoxes(amount))
};
const destroyBoxes = function () {
    divParent.innerHTML = '';
}
btnRender.addEventListener('click', onDivGallery);
btnDestroy.addEventListener('click', destroyBoxes);
