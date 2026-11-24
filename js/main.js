document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Логика отображения меню и фильтров ---
    const sortedDishes = [...dishes].sort((a, b) => a.name.localeCompare(b.name));

    // Создание карточки блюда
    function createCard(dish) {
        const card = document.createElement('div');
        card.classList.add('lunch-card');
        card.setAttribute('data-dish', dish.keyword);

        card.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}" class="lunch-img">
            <p class="price">${dish.price}₽</p>
            <p class="name">${dish.name}</p>
            <p class="weight">${dish.count}</p>
            <button>Добавить</button>
        `;

        // Клик по карточке добавляет блюдо в заказ
        card.addEventListener('click', () => {
            addToOrder(dish);
        });

        return card;
    }

    // Отрисовка блюд категории в её сетке (kind = null -> все блюда)
    function renderDishes(grid, category, kind) {
        grid.innerHTML = '';
        sortedDishes
            .filter(dish => dish.category === category)
            .filter(dish => !kind || dish.kind === kind)
            .forEach(dish => grid.appendChild(createCard(dish)));
    }

    document.querySelectorAll('.lunch-category').forEach(block => {
        const category = block.dataset.category;

        const grid = document.createElement('div');
        grid.classList.add('lunch-grid');
        block.appendChild(grid);

        renderDishes(grid, category, null);

        // --- Фильтрация ---
        const filterButtons = block.querySelectorAll('.filter-btn');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const wasActive = button.classList.contains('active');

                // Снимаем active со всех фильтров этой категории
                filterButtons.forEach(btn => btn.classList.remove('active'));

                if (wasActive) {
                    // Повторный клик: фильтр снят, показываем все блюда
                    renderDishes(grid, category, null);
                } else {
                    button.classList.add('active');
                    renderDishes(grid, category, button.dataset.kind);
                }
            });
        });
    });

    // --- 2. Логика заказа ---
    const orderColumn = document.querySelector('.order-col');
    const orderTitle = orderColumn.querySelector('h3');

    // Блок для вывода выбранных блюд
    const orderInfoBlock = document.createElement('div');
    orderInfoBlock.classList.add('order-info');
    orderTitle.insertAdjacentElement('afterend', orderInfoBlock);

    const orderState = {
        soup: null,
        main: null,
        salad: null,
        drink: null,
        dessert: null
    };

    const categoriesMap = {
        soup: 'Суп',
        main: 'Главное блюдо',
        salad: 'Салат/стартер',
        drink: 'Напиток',
        dessert: 'Десерт'
    };

    function addToOrder(dish) {
        orderState[dish.category] = dish;
        updateOrderUI();
    }

    function updateOrderUI() {
        orderInfoBlock.innerHTML = '';

        let totalCost = 0;
        let hasItems = false;

        if (Object.values(orderState).every(dish => dish === null)) {
            orderInfoBlock.innerHTML = '<h3>Ничего не выбрано</h3>';
            return;
        }

        for (const key in categoriesMap) {
            const dish = orderState[key];
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('order-category');

            if (dish) {
                hasItems = true;
                totalCost += dish.price;
                categoryDiv.innerHTML = `
                    <h4>${categoriesMap[key]}</h4>
                    <p>${dish.name} ${dish.price}₽</p>
                `;
            } else {
                const emptyText = key === 'drink' ? 'Напиток не выбран' : 'Блюдо не выбрано';
                categoryDiv.innerHTML = `
                    <h4>${categoriesMap[key]}</h4>
                    <p>${emptyText}</p>
                `;
            }
            orderInfoBlock.appendChild(categoryDiv);
        }

        if (hasItems) {
            const totalBlock = document.createElement('div');
            totalBlock.classList.add('total-price-block');
            totalBlock.innerHTML = `<h3>Стоимость заказа</h3><p class="total-value">${totalCost}₽</p>`;
            orderInfoBlock.appendChild(totalBlock);
        }
    }

    // --- 3. Логика кнопки "Сбросить" ---
    const resetButton = document.querySelector('.form-buttons button[type="reset"]');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            for (const key in orderState) {
                orderState[key] = null;
            }
            updateOrderUI();
        });
    }

    updateOrderUI();
});
