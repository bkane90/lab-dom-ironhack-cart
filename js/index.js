// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  let sum = price * quantity;
  const subtotal = product.querySelector('.subtotal span').innerHTML = sum;
  return subtotal;
}

// ITERATION 2
function calculateAll() {
  const multipleProducts = document.getElementsByClassName('product');
  let total = 0;
  for  (i = 0; i < multipleProducts.length; i++) {
    let subtotal = updateSubtotal(multipleProducts[i]);
    total += subtotal;
  }

  // ITERATION 3
 document.querySelector('#total-value span').innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBTn = document.querySelectorAll('action');
  for (let i = 0; i < removeBtn.length; i++) {
    btn.addEventListener('click', removeProduct);
  }
});
