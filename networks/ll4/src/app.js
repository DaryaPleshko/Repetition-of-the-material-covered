const API_URL = 'https://fakestoreapi.com';

let products = [];
let toDelete = null;
const el = {
    container: document.getElementById('productsContainer'),
    form: document.getElementById('productForm'),
    loading: document.getElementById('loading'),
    noProducts: document.getElementById('noProducts'),
    fetchBtn: document.getElementById('fetchProducts'),
    clearBtn: document.getElementById('clearForm'),
    modal: document.getElementById('deleteModal'),
    confirmDel: document.getElementById('confirmDelete'),
    cancelDel: document.getElementById('cancelDelete'),
    count: document.getElementById('count')
};

//УВЕДОМЛЕНИЯ
function notify(msg, isError = false) {
    document.querySelector('.notification')?.remove();

    const note = document.createElement('div');
    note.className = `notification ${isError ? 'error' : ''}`;
    note.innerHTML = `<i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
        <span>${msg}</span>`;

    document.body.appendChild(note);

    setTimeout(() => {
        note.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => note.remove(), 300);
    }, 5000);
}
//ЗАГРУЗКА ТОВАРОВ
async function loadProducts() {
    try {
        showLoading(true);
        el.container.style.display = 'none';
        el.noProducts.style.display = 'none';

        const res = await fetch(`${API_URL}/products`);
        if (!res.ok) throw new Error('Ошибка загрузки');
        products = await res.json();

        updateUI();
        notify(`Загружено ${products.length} товаров`);
    } catch (err) {
        showError('Не удалось загрузить товары');
        console.error('Ошибка:', err);
    } finally {
        showLoading(false);
    }
}
//ОБЩИЕ
async function apiRequest(url, method = 'GET', data = null) {
    const options = {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: data ? JSON.stringify(data) : null
    };
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`Ошибка ${method}`);

    return await res.json();
}
//ДОБАВЛЕНИЕ
async function addProduct(data) {
    try {
        const newProduct = await apiRequest(`${API_URL}/products`, 'POST', data);

        products.unshift(newProduct);
        updateUI();
        notify('Товар добавлен');
    } catch (err) {
        notify('Не удалось добавить товар', true);
        console.error('Ошибка:', err);
    }
}
//УДАЛЕНИЕ
async function deleteProduct(id) {
    try {
        await apiRequest(`${API_URL}/products/${id}`, 'DELETE');

        products = products.filter(p => p.id != id);
        updateUI();
        notify('Товар удален');
    } catch (err) {
        notify('Не удалось удалить товар', true);
        console.error('Ошибка:', err);
    }
}
//ОБНОВЛЕНИЕ СТРАНИЦЫ 
function updateUI() {
    el.count.textContent = products.length;
    if (!products.length) {
        el.noProducts.style.display = 'block';
        el.container.style.display = 'none';
        return;
    }
    el.container.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image-container">
            ${product.image && product.image.length > 0
            ? `<img src="${product.image}" alt="${product.title}" class="product-image">`
            : `<div style="width:100%;height:100%;background-color:#e0e0e0;"></div>`
        }
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-meta">
                    <span class="product-price">$${product.price}</span>
                    <span class="product-category">${product.category}</span>
                </div>
                <div class="product-actions">
                    <button class="btn btn-delete" data-id="${product.id}"><i class="fas fa-trash"></i> Удалить</button>
                </div>
            </div>
        </div>
    `).join('');

    el.container.style.display = 'grid';
    el.noProducts.style.display = 'none';

    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            showDeleteModal(e.currentTarget.dataset.id);
        });
    });
}
//ЗАГРУЗКА
function showLoading(show) {
    el.loading.style.display = show ? 'block' : 'none';
    el.fetchBtn.disabled = show;
    el.fetchBtn.innerHTML = show
        ? '<i class="fas fa-spinner fa-spin"></i> Загрузка...'
        : '<i class="fas fa-shopping-bag"></i> Получить все товары';
}
//ОШИБКА 
function showError(msg) {
    el.container.innerHTML = `<div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <h3>Ошибка загрузки</h3>
            <p>${msg}</p>
        </div>`;
}
//МОДАЛКА
function showDeleteModal(id) {
    const product = products.find(p => p.id == id);
    if (!product) return;
    toDelete = id;

    el.modal.querySelector('p').innerHTML = `Удалить товар "<strong>${product.title}</strong>"?`;
    el.modal.style.display = 'flex';
}
function hideDeleteModal() {
    el.modal.style.display = 'none';
    toDelete = null;
}
// ОБРАБОТЧИКИ СОБЫТИЙ 
function setupEvents() {
    //Загрузка товаров при клике на кнопку
    el.fetchBtn.addEventListener('click', loadProducts);
    //Очистка формы
    el.clearBtn.addEventListener('click', () => {
        el.form.reset();
        notify('Форма очищена');
    });
    // Обработка отправки формы добавления товара
    el.form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = {
            title: document.getElementById('title').value,
            price: parseFloat(document.getElementById('price').value),
            description: document.getElementById('description').value,
            category: document.getElementById('category').value,
            image: '../assets/photo.png',
            rating: { rate: 0, count: 0 }
        };

        // Проверяем заполнение полей
        if (!data.title || isNaN(data.price) || !data.description || !data.category) {
            notify('Заполните все обязательные поля', true);
            return;
        }

        const btn = e.submitter; // Кнопка, которая отправила форму
        const original = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Добавление...';

        try {
            await addProduct(data);
            el.form.reset();
            notify('Товар успешно добавлен!');
        } catch (error) {
            console.error('Ошибка:', error);
        } finally {
            btn.disabled = false;
            btn.innerHTML = original;
        }
    });
    //Подтверждение удаления товара
    el.confirmDel.addEventListener('click', async () => {
        if (toDelete) {
            await deleteProduct(toDelete);
            hideDeleteModal();
        }
    });
    //Отмена удаления
    el.cancelDel.addEventListener('click', hideDeleteModal);
    //Закрытие модального окна при клике вне его
    window.addEventListener('click', (e) => {
        if (e.target === el.modal) hideDeleteModal();
    });
}
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    setupEvents();
});