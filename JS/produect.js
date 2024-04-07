let ProductsInCart = localStorage.getItem("ProductsInCart");
let allProducts = document.querySelector(".products");
let productsItems = [];

// Check if products exist in local storage
if (ProductsInCart) {
    productsItems = JSON.parse(ProductsInCart);
    drawCartProducts(productsItems);
}

// Function to draw cart products
function drawCartProducts(productsItems) {
    allProducts.innerHTML = ''; // Clear previous content
    productsItems.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product_item');
        productDiv.innerHTML = `
            <div>
                <a href="produect.html"><img src="${item.imageUrl}" alt="image for phone"></a>
                <div class="product_item_desc">
                    <p>${item.title}</p>
                    <p>this is the best tablet</p>
                    <p><span>egp</span>${item.price}</p>
                </div>
                <div class="product_item_action">
                    <button class="remove_from_cart" onclick="removeFromCart(${item.id})">Remove from cart</button>
                </div>
            </div>
        `;
        allProducts.appendChild(productDiv);
    });
}

// Function to remove a product from cart
function removeFromCart(id) {
    let index = productsItems.findIndex(item => item.id === id);
    if (index !== -1) {
        productsItems.splice(index, 1);
        drawCartProducts(productsItems);
        localStorage.setItem("ProductsInCart", JSON.stringify(productsItems));
    }
}
