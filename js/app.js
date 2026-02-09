
const addButtons = document.querySelectorAll(".add-to-order");
const modal = document.getElementById("orderModal");
const itemNameEl = document.getElementById("modalItemName");
const itemPriceEl = document.getElementById("modalItemPrice");
const quantityEl = document.getElementById("quantity");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

let currentItem = { name: "", price: 0, qty: 1 };

// Show modal on Add to Order
addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentItem.name = btn.getAttribute("data-name");
        currentItem.price = btn.getAttribute("data-price");
        currentItem.qty = 1;
        itemNameEl.textContent = currentItem.name;
        itemPriceEl.textContent = currentItem.price;
        quantityEl.textContent = currentItem.qty;
        modal.classList.remove("hidden");
    });
});

// Increment/Decrement
incrementBtn.addEventListener("click", () => {
    currentItem.qty++;
    quantityEl.textContent = currentItem.qty;
});
decrementBtn.addEventListener("click", () => {
    if (currentItem.qty > 1) {
        currentItem.qty--;
        quantityEl.textContent = currentItem.qty;
    }
});

// Cancel
cancelBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Confirm & Send (WhatsApp)
confirmBtn.addEventListener("click", () => {
    const message = `Hello! I want to order:\n-${currentItem.name} x ${currentItem.qty} ( $${currentItem.price} )`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/+212608173585?text=${encoded}`, "_blank");
    modal.classList.add("hidden");
});

// Animate "View Menu" button on click

const viewMenuBtn = document.getElementById("full-menu-btn");
const extraCards = document.querySelectorAll(".menu-extra");

viewMenuBtn.addEventListener("click", () => {
    extraCards.forEach(card => {
        card.classList.remove("hidden");
    });
        viewMenuBtn.classList.add("hidden");

});

// this button Order Now on WhatsApp 
const whatsappBtn = document.getElementById("whatsapp-btn");
const whatsappbtn2 = document.getElementById("whatsapp-btn2");
whatsappBtn.addEventListener("click", () => {
    const message = `Hello! I want to order :\n`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/+212608173585?text=${encoded}`, "_blank");

});
whatsappbtn2.addEventListener("click", () => {
    const message = `Hello! I want to order :\n`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/+212608173585?text=${encoded}`, "_blank");
});