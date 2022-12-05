const lista = [
    'Cioccolata',
    'Guanciale',
    'Acqua',
    'Insalata',
    'Pasta',
    'Formaggio',
    'Pizza Surgelata'
]

const listContainer = document.querySelector('.lista-spesa')

let i = 0;
let element = '';
while(i < lista.length){
    let item = lista[i];

    let element = `<li class="list-item">${item}</li>`;
    listContainer.innerHTML += element;

    i++;
}