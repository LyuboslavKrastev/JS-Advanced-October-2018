function addItem(){
    let select = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;

    let menu = document.getElementById('menu');
    let option = document.createElement('option');
    option.text = select;
    option.value = value;

    menu.appendChild(option);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}