const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const arrayElementToAdd = function(array){
return array.map(element => {
        const item = document.createElement('li');
        item.textContent = element;
        return item;
    }
    );
};
const ingredientsToAdd = arrayElementToAdd(ingredients);
const list = document.querySelector('#ingredients');
list.append(...ingredientsToAdd);
