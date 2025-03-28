const cart = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const card = event.target.closest('.product-card');
            const name = card.getAttribute('data-name');
            const price = parseFloat(card.getAttribute('data-price'));
    
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                cart.push({ name, price, qty: 1 });
            }
    
            updateCart();
        });
    });
});

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalPriceEl = document.getElementById('total-price');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.qty} - ₱${(item.price * item.qty).toFixed(2)}`;
        cartList.appendChild(li);
    });

    totalPriceEl.textContent = total.toFixed(2);
}