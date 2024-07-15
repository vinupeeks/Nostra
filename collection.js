const productData = {
    "products": [
        { "src": "img/products/f2.jpg", "name": "Printed shirt" },
        { "src": "img/products/f3.jpg", "name": "Printed shirt" },
        { "src": "img/products/n3.jpg", "name": "White Shirt" },
        { "src": "img/products/f4.jpg", "name": "White Shirt" },
        { "src": "img/products/n7.jpg", "name": "Brown Shirt" },
        { "src": "img/products/n8.jpg", "name": "Brown Shirt" },
        { "src": "img/products/n5.jpg", "name": "Blue Jeans Shirt" }
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products');
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No products found';
    noResultsMessage.style.display = 'none'; // Initially hidden
    productsContainer.appendChild(noResultsMessage);

    function displayProducts(products) {
        // Clear current product boxes
        productsContainer.querySelectorAll('.product-box').forEach(box => box.remove());

        // Display products
        products.forEach(product => {
            const productBox = document.createElement('div');
            productBox.className = 'product-box';

            const img = document.createElement('img');
            img.src = product.src;
            img.alt = product.name;

            const p = document.createElement('p');
            p.textContent = product.name;

            productBox.appendChild(img);
            productBox.appendChild(p);

            productsContainer.appendChild(productBox);
        });

        // Show/hide no results message
        if (products.length === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }

    // Initial display of all products
    displayProducts(productData.products);

    const search = document.getElementById('search');
    search.addEventListener('keyup', function (event) {
        const enteredValue = event.target.value.toUpperCase();
        const filteredProducts = productData.products.filter(product =>
            product.name.toUpperCase().includes(enteredValue)
        );

        // Display only filtered products
        displayProducts(filteredProducts);
    });
});
