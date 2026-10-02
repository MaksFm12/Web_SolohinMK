document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Логика отображения меню ---
    const sortedDishes = [...dishes].sort((a, b) => a.name.localeCompare(b.name));
    const section = document.querySelector('.lunch-section');
    const h2s = section.querySelectorAll('h2');
    
    const categories = {
        'soup': { element: null },
        'main': { element: null },
        'drink': { element: null }
    };

    // Находим заголовки, чтобы вставить после них карточки
    h2s.forEach(h2 => {
        if (h2.textContent.includes('суп')) categories['soup'].element = h2;
        if (h2.textContent.includes('главное')) categories['main'].element = h2;
        if (h2.textContent.includes('напиток')) categories['drink'].element = h2;
    });

    for (const key in categories) {
        const categoryData = categories[key];
        if (!categoryData.element) continue;

        const grid = document.createElement('div');
        grid.classList.add('lunch-grid');
        const categoryDishes = sortedDishes.filter(d => d.category === key);

        categoryDishes.forEach(dish => {
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

            // Теперь слушаем клик по всей карточке
            card.addEventListener('click', () => {
                addToOrder(dish);
            });

            grid.appendChild(card);
        });

        categoryData.element.insertAdjacentElement('afterend', grid);
    }

    // --- 2. Логика заказа ---
    const orderColumn = document.querySelector('.order-col');
    const orderTitle = orderColumn.querySelector('h3');
    
    // Создаем блок для вывода выбранных блюд
    const orderInfoBlock = document.createElement('div');
    orderInfoBlock.classList.add('order-info');
    orderTitle.insertAdjacentElement('afterend', orderInfoBlock);

    const orderState = {
        soup: null,
        main: null,
        drink: null
    };

    function addToOrder(dish) {
        orderState[dish.category] = dish;
        updateOrderUI();
    }

    function updateOrderUI() {
        orderInfoBlock.innerHTML = ''; 
        
        let totalCost = 0;
        let hasItems = false;

        const categoriesMap = {
            'soup': 'Суп',
            'main': 'Главное блюдо',
            'drink': 'Напиток'
        };

        if (!orderState.soup && !orderState.main && !orderState.drink) {
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
                let emptyText = 'Блюдо не выбрано';
                if (key === 'drink') emptyText = 'Напиток не выбран';
                
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
            // Очищаем состояние корзины
            orderState.soup = null;
            orderState.main = null;
            orderState.drink = null;
            
            // Обновляем интерфейс (очищаем список блюд)
            updateOrderUI();
        });
    }
    
    updateOrderUI();
});