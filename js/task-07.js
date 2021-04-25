const inputValue = document.querySelector('#font-size-control');
const forTextSize = document.querySelector('#text');
function changeTextSize(event) {
  forTextSize.style.fontSize = `${event.currentTarget.value}px` 
};
inputValue.addEventListener('input', changeTextSize);