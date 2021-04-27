const valueInput = document.querySelector('#controls input');
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const divParent = document.querySelector('#boxes');
const makeColor = function () {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`
};
   
const createBoxes = function () {
    const num = Number(valueInput.value);
    const arrayDivMarkup = [];
    divParent.setAttribute('class', "div-collection")
    for (let i = 0; i < num; i += 1){
        const sizeDiv = 30 + i * 10;
        const divMarkup = `<div 
       style="width: ${sizeDiv}px; height: ${sizeDiv}px; 
       background-color: ${makeColor()};"></div>`;
        arrayDivMarkup.push(divMarkup);   
    };
    return arrayDivMarkup.join('')
};
const onDivGallery = function () {
    return divParent.insertAdjacentHTML('afterbegin', createBoxes())
};
const destroyBoxes = function () {
    divParent.innerHTML = '';
}
btnRender.addEventListener('click', onDivGallery);
btnDestroy.addEventListener('click', destroyBoxes);
