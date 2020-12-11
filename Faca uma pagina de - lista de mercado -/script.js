const btnAdd = document.getElementById('btn-add');
const btnSave = document.getElementById('btn-save');
const inpItem = document.getElementById('inp-item-lista');
const arrayLista = [];

btnAdd.addEventListener('click', addItem);
btnSave.addEventListener('click', salvarLista);

inpItem.addEventListener('keypress', (key) => {
    if (key.code == 'Enter') {
        addItem();
    }
});

function addItem() {
    const inpValue = document.getElementById('inp-item-lista').value;
    if (inpValue.length == 0) {
        alert('Digite alguma coisa!')
    } else {
        const option = document.createElement('option');
        option.textContent = inpValue;
        const pai = document.getElementById('itens-da-lista');
        pai.appendChild(option);
        document.getElementById('inp-item-lista').value = '';
        arrayLista.push(inpValue);
    }
}

function salvarLista() {
    console.log(arrayLista);
    localStorage.setItem('listaMercado', JSON.stringify(arrayLista));
}
