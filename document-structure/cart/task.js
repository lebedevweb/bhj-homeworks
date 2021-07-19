'use strict';

const productsList = Array.from(document.querySelectorAll('div.product'));
const cartProducts = document.querySelector('div.cart__products');

productsList.forEach((product) => {
  let productId = product.dataset.id;
  let productImg = product.querySelector('img.product__image').src;

  Array.from(product.querySelectorAll('div.product__quantity-control')).forEach((quantityControl) => {
    quantityControl.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (evt.target.classList.contains('product__quantity-control_inc')) {
        product.querySelector('div.product__quantity-value').textContent++;
      } else if (evt.target.classList.contains('product__quantity-control_dec') && Number.parseInt(product.querySelector('div.product__quantity-value').textContent) > 1) {
        product.querySelector('div.product__quantity-value').textContent--;
      }
    }, false);
  })

  product.querySelector('div.product__add').addEventListener('click', (evt) => {
    evt.preventDefault();
    let nowCartProduct = Array.from(cartProducts.querySelectorAll('.cart__product')).find(item => item.dataset.id == productId);
    if (nowCartProduct) {
      nowCartProduct.querySelector('div.cart__product-count').textContent = Number.parseInt(nowCartProduct.querySelector('div.cart__product-count').textContent) + Number.parseInt(product.querySelector('div.product__quantity-value').textContent);
    } else {
      cartProducts.append(cartTemplate(productId, productImg, product.querySelector('div.product__quantity-value').textContent));
    }
  }, false);

});

function cartTemplate(productId, productImg, productCount) {
  let newDiv = document.createElement('div');
  newDiv.className = 'cart__product';
  newDiv.dataset.id = productId;

  let newImg = document.createElement('img');
  newImg.className = 'cart__product-image';
  newImg.src = productImg;

  newDiv.append(newImg);

  let newCartCountDiv = document.createElement('div');
  newCartCountDiv.className = 'cart__product-count';
  newCartCountDiv.textContent = productCount;

  newDiv.append(newCartCountDiv);

  return newDiv;
}
