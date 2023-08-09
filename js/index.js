function addToCart(itemName) {
    const cartItems = document.getElementById('cart-items');
    const li = document.createElement('li');
    li.textContent = itemName;
    cartItems.appendChild(li);
  }