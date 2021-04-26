const topList = document.querySelector('#categories');

const countAmountCategories = function (topElement) {
    const count = topElement.children.length;
    return console.log(`В списке ${count} категории.`);
};
countAmountCategories(topList);

const headAndCountCategories = function (topElement) {
    const categories = topElement.querySelectorAll('.item');
    [...categories].forEach(category => {
        const headCategories = category.querySelector('h2').textContent;
        console.log(`Категория: ${headCategories}.`);
        const countCategories = category.querySelectorAll('li').length;
        console.log(`Количество элементов: ${countCategories}.`);
    })
};
headAndCountCategories(topList);
 

// const nameAndCountCategories = function (topElement) {
//     const headerTextAll = topElement.querySelectorAll('.item h2');
//     const headerText = [...headerTextAll].map(head => head.textContent);
//     const countCategoriesAll = topElement.querySelectorAll('.item ul');
//     const countCategories = [...countCategoriesAll].map(categorie => categorie.children.length);
//     for (let i = 0; i < countCategories.length; i += 1) {
//         console.log(`Категория: ${headerText[i]}; Количество элементов: ${countCategories[i]}`);
//     };
// };
// nameAndCountCategories(topList);


