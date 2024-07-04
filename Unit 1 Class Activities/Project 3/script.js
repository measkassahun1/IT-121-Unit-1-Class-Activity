// Declare variables using var, let, and const
const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
const addProductButton = document.getElementById('addProductButton');
const productNameInput = document.getElementById('productName');
const productModelInput = document.getElementById('productModel');
const productCostInput = document.getElementById('productCost');
const productQuantityInput = document.getElementById('productQuantity');

// Create an array to hold the inventory of store items
let inventory = [];

// Create three product items
const product1 = { name: 'Laptop', model: 'XPS 13', cost: 999.99, quantity: 10 };
const product2 = { name: 'Smartphone', model: 'Galaxy S20', cost: 799.99, quantity: 20 };
const product3 = { name: 'Tablet', model: 'iPad Pro', cost: 899.99, quantity: 15 };

// Add the product objects to the inventory array
inventory.push(product1, product2, product3);

// Function to display the inventory data in the HTML table
function displayInventory() {
    productTable.innerHTML = ''; // Clear existing rows
    inventory.forEach(product => {
        const row = productTable.insertRow();
        row.insertCell(0).textContent = product.name;
        row.insertCell(1).textContent = product.model;
        row.insertCell(2).textContent = `$${product.cost.toFixed(2)}`;
        row.insertCell(3).textContent = product.quantity;
    });
}

// Event handler to add a new product
function addProduct() {
    const name = productNameInput.value.trim();
    const model = productModelInput.value.trim();
    const cost = parseFloat(productCostInput.value);
    const quantity = parseInt(productQuantityInput.value, 10);

    if (name && model && !isNaN(cost) && !isNaN(quantity)) {
        const newProduct = { name, model, cost, quantity };
        inventory.push(newProduct);
        displayInventory();
        productNameInput.value = '';
        productModelInput.value = '';
        productCostInput.value = '';
        productQuantityInput.value = '';
    } else {
        alert('Please fill in all fields with valid values.');
    }
}

// Add event listeners
addProductButton.addEventListener('click', addProduct);

// Display initial inventory
displayInventory();