let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartIcon();

document.querySelectorAll(".add-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {

        const productCard = btn.closest(".product-card");

        const product = {
            name: productCard.querySelector("h3").innerText,
            price: productCard.querySelector("p").innerText,
            img: productCard.querySelector("img").src
        };

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartIcon();
        alert("Item added to cart!");
    });
});

function updateCartIcon() {
    const cartIcon = document.querySelector(".icons");
    if (cartIcon) cartIcon.innerHTML = `🛒 (${cart.length})`;
}


const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.category;

        products.forEach(card => {
            if (category === "all" || card.dataset.category === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
