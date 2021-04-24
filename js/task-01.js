const topList = document.querySelector('#categories');

const countAmountCategories = function (topElement) {
    const count = topElement.children.length;
    return console.log(`В списке ${count} категории.`);
};
countAmountCategories(topList);

const headAndCountCategories = function (topElement) {
    const categories = topElement.querySelectorAll('.item');
    for (const categorie of [...categories]) {
        const headCategorie = categorie.querySelector('h2').textContent;
        console.log(`Категория: ${headCategorie}.`);
        const countCategorie = categorie.querySelectorAll('li').length;
        console.log(`Количество элементов: ${countCategorie}.`);
    }
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


