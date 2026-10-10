document.addEventListener('DOMContentLoaded', () => {
    const categoriesConfig = {
        'soup': {
            title: 'Выберите суп',
            filters: [
                { label: 'рыбный', kind: 'fish' },
                { label: 'мясной', kind: 'meat' },
                { label: 'вегетарианский', kind: 'veg' }
            ]
        },
        'main': {
            title: 'Выберите главное блюдо',
            filters: [
                { label: 'рыбное', kind: 'fish' },
                { label: 'мясное', kind: 'meat' },
                { label: 'вегетарианское', kind: 'veg' }
            ]
        },
        'salad': {
            title: 'Выберите салат или стартер',
            filters: [
                { label: 'рыбный', kind: 'fish' },
                { label: 'мясной', kind: 'meat' },
                { label: 'вегетарианский', kind: 'veg' }
            ]
        },
        'drink': {
            title: 'Выберите напиток',
            filters: [
                { label: 'холодный', kind: 'cold' },
                { label: 'горячий', kind: 'hot' }
            ]
        },
        'dessert': {
            title: 'Выберите десерт',
            filters: [
                { label: 'маленькая порция', kind: 'small' },
                { label: 'средняя порция', kind: 'medium' },
                { label: 'большая порция', kind: 'large' }
            ]
        }
    };

    const section = document.querySelector('.lunch-section');
    const h2s = section.querySelectorAll('h2');
    const sortedDishes = [...dishes].sort((a, b) => a.name.localeCompare(b.name));

    for (const key in categoriesConfig) {
        const config = categoriesConfig[key];
        
        let targetH2 = null;
        h2s.forEach(h2 => {
            if (h2.textContent.includes(config.title)) targetH2 = h2;
        });

        if (!targetH2) continue;

        const filterContainer = document.createElement('div');
        filterContainer.classList.add('filters-container');

        config.filters.forEach(filter => {
            const btn = document.createElement('button');
            btn.classList.add('filter-btn');
            btn.textContent = filter.label;
            btn.dataset.kind = filter.kind;
            
            btn.addEventListener('click', () => {
                const isActive = btn.classList.contains('active');
                
                filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                
                if (!isActive) {
                    btn.classList.add('active');
                }
                
                const currentKind = btn.classList.contains('active') ? btn.dataset.kind : null;
                const grid = filterContainer.nextElementSibling;
                
                if (grid && grid.classList.contains('lunch-grid')) {
                    const cards = grid.querySelectorAll('.lunch-card');
                    cards.forEach(card => {
                        if (!currentKind || card.dataset.kind === currentKind) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                }
            });

            filterContainer.appendChild(btn);
        });

        targetH2.insertAdjacentElement('afterend', filterContainer);

        const grid = document.createElement('div');
        grid.classList.add('lunch-grid');
        const categoryDishes = sortedDishes.filter(d => d.category === key);

        categoryDishes.forEach(dish => {
            const card = document.createElement('div');
            card.classList.add('lunch-card');
            card.setAttribute('data-dish', dish.keyword);
            card.setAttribute('data-kind', dish.kind);

            card.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}" class="lunch-img">
                <p class="price">${dish.price}₽</p>
                <p class="name">${dish.name}</p>
                <p class="weight">${dish.count}</p>
                <button>Добавить</button>
            `;

            card.addEventListener('click', () => {
                addToOrder(dish);
            });

            grid.appendChild(card);
        });

        filterContainer.insertAdjacentElement('afterend', grid);
    }

    const orderColumn = document.querySelector('.order-col');
    const orderTitle = orderColumn.querySelector('h3');
    
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
            'salad': 'Салат/стартер',
            'drink': 'Напиток',
            'dessert': 'Десерт'
        };

        if (!Object.values(orderState).some(item => item !== null)) {
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
    
    const resetButton = document.querySelector('.form-buttons button[type="reset"]');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            for (const key in orderState) {
                orderState[key] = null;
            }
            updateOrderUI();
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.lunch-card').forEach(card => card.style.display = 'flex');
        });
    }
    
    updateOrderUI();
});