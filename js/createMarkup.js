onst;
list = document.querySelector('.js-products');
list.insertAdjacentHTML('afterbegin', createMarkup(products));
list.addEventListener('click', handlerGetProduct);
function handlerGetProduct(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }

  const parent = evt.target.closest('.js-item');
  const currentId = Number(parent.dataset.productId);
  const currentProduct = products.find(({ id }) => id === currentId);

  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${currentProduct.img}" alt="${currentProduct.name}">
      <h2>${currentProduct.name}</h2>
      <h3>${currentProduct.price}</h3>
      <p>${currentProduct.description}</p>
    </div>
  `);

  instance.show();
}
function createMarkup(arr) {
  return arr
    .map(
      ({ img, name, price, id }) => `
      <li class="item js-item" data-product-id="${id}">
        <img src="${img}" alt="${name}">
        <h2>${name}</h2>
        <p>Ціна: ${price} грн</p>
      </li>
`
    )
    .join('');
}
