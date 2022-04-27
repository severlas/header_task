const productCart = prompt('Hello\nYou can input a shopping list (Please format input ", ")', ''),
      listProduct = productCart.split(', '),
      quantityCart = listProduct.length,
      listProductItem = document.querySelector('.cart__open__product'),
      listQuantityItem = document.querySelector('.cart__open__quantity');

if (productCart === '') {
    document.querySelector('.quantity_item').innerText = 0;
}else {
    document.querySelector('.quantity_item').innerText = quantityCart;
}    

function addListItem (item, listItem) {
    let elementCreated = document.createElement('li');
    elementCreated.innerText = `${item}`;
    listItem.append(elementCreated);
}

for (let i of listProduct) {
    addListItem(i, listProductItem);
    let quantityProduct = prompt(`Input quantity product ${i}:`, '');
    addListItem(quantityProduct, listQuantityItem);
}
