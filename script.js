const productCart = prompt('Hello\nEnter a list of products (Format input ", ")', ''),
      listProduct = productCart.split(', '),
      quantityCart = listProduct.length,
      listProductItem = document.querySelector('.content__product'),
      listQuantityItem = document.querySelector('.content__quantity');

if (productCart === '') {
    document.querySelector('.cart-quantity__number').innerText = 0;
}else {
    document.querySelector('.cart-quantity__number').innerText = quantityCart;
}    

function addListItem (item, listItem) {
    let elementCreate = document.createElement('div');
    elementCreate.innerText = `${item}`;
    listItem.append(elementCreate);
}

for (let i of listProduct) {
    addListItem(i, listProductItem);
    let quantityProduct = prompt(`Input quantity product ${i}:`, '');
    if (quantityProduct === '') {
        quantityProduct = 1;
    }
    addListItem(quantityProduct, listQuantityItem);
}
