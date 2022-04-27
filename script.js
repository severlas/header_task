const productCart = prompt('Hello\nYou can input a shopping list (Please format input ", ")', ''),
      listProduct = productCart.split(', '),
      quantityCart = listProduct.length,
      listProductItem = document.querySelector('.cart__open__product'),
      listQuantityItem = document.querySelector('.cart__open__quantity');

document.querySelector('.quantity_item').innerText = quantityCart;

function createdListItem (item, listItem) {
    let elementCreated = document.createElement('li');
    elementCreated.innerText = `${item}`;
    listItem.append(elementCreated);
}

for (let i of listProduct) {
    createdListItem(i, listProductItem);
    let quantityProduct = prompt(`Input quantity product ${i}:`, '');
    createdListItem(quantityProduct, listQuantityItem);
}
