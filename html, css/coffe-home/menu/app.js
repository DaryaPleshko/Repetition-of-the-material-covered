const buttons = document.querySelectorAll('.choice-menu div');
const hoverImages = [
    "../assets/coffeeIconHOVER.png",
    "../assets/TeaIconHOVER.png",
    "../assets/DessertIconHOVER.png"
];

const imgs = [];
const originalSrcs = [];
let activeButton = null;

const productsData = {
    coffee: [
        { image: "../assets/IrishСoffee.png", name: "Irish coffee", about: "Fragrant black coffee with Jameson Irish whiskey and whipped milk", price: "$7.00" },
        { image: "../assets/KahluaСoffee.png", name: "Kahlua coffee", about: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk", price: "$7.00" },
        { image: "../assets/HoneyКaf.png", name: "Honey raf", about: "Espresso with frothed milk, cream and aromatic honey", price: "$5.50" },
        { image: "../assets/IceСappuccino.png", name: "Ice cappuccino", about: "Cappuccino with soft thick foam in summer version with ice", price: "$5.00" },
        { image: "../assets/Espresso.png", name: "Espresso", about: "Classic black coffee", price: "$4.50" },
        { image: "../assets/Latte.png", name: "Latte", about: "Espresso coffee with the addition of steamed milk and dense milk foam", price: "$5.50" },
        { image: "../assets/Latte macchiato.png", name: "Latte macchiato", about: "Espresso with frothed milk and chocolate", price: "$5.50" },
        { image: "../assets/Coffee with cognac.png", name: "Coffee with cognac", about: "Fragrant black coffee with cognac and whipped cream", price: "$6.50" },
    ],
    tea: [
        { image: "../assets/Moroccan.png", name: "Moroccan", about: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint", price: "$4.50" },
        { image: "../assets/Ginger.png", name: "Ginger", about: "Original black tea with fresh ginger, lemon and honey", price: "$5.00" },
        { image: "../assets/Cranberry.png", name: "Cranberry", about: "Invigorating black tea with cranberry and honey", price: "$5.00" },
        { image: "../assets/SeaBuckthorn.png", name: "Sea buckthorn", about: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon", price: "$5.00" },
    ],
    dessert: [
        { image: "../assets/Marble cheesecake.png", name: "Marble cheesecake", about: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam", price: "$3.50" },
        { image: "../assets/Red velvet.png", name: "Red velvet", about: "Layer cake with cream cheese frosting", price: "$4.00" },
        { image: "../assets/Cheesecakes.png", name: "Cheesecakes", about: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar", price: "$4.50" },
        { image: "../assets/Creme brulee.png", name: "Creme brulee", about: "Delicate creamy dessert in a caramel basket with wild berries", price: "$4.00" },
        { image: "../assets/Pancakes.png", name: "Pancakes", about: "Tender pancakes with strawberry jam and fresh strawberries", price: "$4.50" },
        { image: "../assets/Honey cake.png", name: "Honey cake", about: "Classic honey cake with delicate custard", price: "$4.50" },
        { image: "../assets/Chocolate cake.png", name: "Chocolate cake", about: "Cake with hot chocolate filling and nuts with dried apricots", price: "$5.50" },
        { image: "../assets/Black forest.png", name: "Black forest", about: "A combination of thin sponge cake with cherry jam and light chocolate mousse", price: "$6.50" },
    ]
};

const productsGrid = document.querySelector('.products-grid') || createProductsGrid();

function createProductsGrid() {
    const grid = document.createElement('div');
    grid.className = 'products-grid';
    document.querySelector('main').appendChild(grid);
    return grid;
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h4 class="product-name">${product.name}</h4>
                <p class="product-about">${product.about}</p>
                <h6 class="product-price">${product.price}</h6>
            </div>
        </div>
    `;
}

function displayProducts(category) {
    const products = productsData[category];
    productsGrid.innerHTML = ''; 

    products.forEach(product => {
        const cardHTML = createProductCard(product);
        productsGrid.innerHTML += cardHTML;
    });
}

function hideAllProducts() {
    productsGrid.innerHTML = '';
}

function resetAll() {
    buttons.forEach(button => {
        button.classList.remove('menu-item-active');
        button.style.backgroundColor = '';
        button.style.border = '';
        button.style.color = '';
    });
    imgs.forEach((img, index) => {
        img.src = originalSrcs[index];
    });
    h3.style.display = 'block';
    activeButton = null;
    hideAllProducts();
}

function activateButton(button, index, category) {
    resetAll();
    button.classList.add('menu-item-active');
    imgs[index].src = hoverImages[index];

    button.style.backgroundColor = '#665F55';
    button.style.border = '2px solid #665F55';
    button.style.color = '#E1D4C9';

    h3.style.display = 'none';
    activeButton = button;

    displayProducts(category);
}

buttons.forEach((button, index) => {
    const img = button.querySelector('img');
    imgs.push(img);
    originalSrcs.push(img.src);

    const hoverSrc = hoverImages[index];

    button.addEventListener('mouseover', () => {
        if (!button.classList.contains('menu-item-active')) {
            img.src = hoverSrc;
            button.style.backgroundColor = '#665F55';
            button.style.border = '2px solid #665F55';
            button.style.color = '#E1D4C9';
        }
    });
    button.addEventListener('mouseout', () => {
        if (!button.classList.contains('menu-item-active')) {
            img.src = originalSrcs[index];
            button.style.backgroundColor = '';
            button.style.border = '';
            button.style.color = '';
        }
    });

});

const coffee = document.querySelector('.coffee');
const tea = document.querySelector('.tea');
const dessert = document.querySelector('.dessert');
const h3 = document.querySelector('h3');

coffee.addEventListener('click', () => activeButton === coffee ? resetAll() : activateButton(coffee, 0, 'coffee'));
tea.addEventListener('click', () => activeButton === tea ? resetAll() : activateButton(tea, 1, 'tea'));
dessert.addEventListener('click', () => activeButton === dessert ? resetAll() : activateButton(dessert, 2, 'dessert'));

hideAllProducts();