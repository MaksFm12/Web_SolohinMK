const dishes = [
    // ===== Супы (рыбный 2, мясной 2, вегетарианский 2) =====
    {
        keyword: 'borsch',
        name: 'Борщ',
        price: 350,
        category: 'soup',
        count: '350 г',
        image: 'https://s1.eda.ru/StaticContent/Photos/Upscaled/120131085552/171206075835/p_O.jpg',
        kind: 'veg'
    },
    {
        keyword: 'lapsha',
        name: 'Суп лапша',
        price: 350,
        category: 'soup',
        count: '350 г',
        image: 'https://storage.delikateska.ru/cache/7/c/lapsha-domashnyaya.jpg/w800qq.webp',
        kind: 'meat'
    },
    {
        keyword: 'harcho',
        name: 'Суп харчо',
        price: 350,
        category: 'soup',
        count: '350 г',
        image: 'https://goldniva.ru/upload/resize_cache/sprint.editor/f98/1024_768_1/ft8dsh0yp6m4fkfig6mkcjoo4jqlcl7a.jpeg',
        kind: 'meat'
    },
    {
        keyword: 'gazpacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        count: '350 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPd2akhWmo6-iEKRWPaJR23KcrLBgR2muyTTJ2uWiqtsWvOctHmjL60Ok&s=10',
        kind: 'veg'
    },
    {
        keyword: 'tomyam',
        name: 'Том ям с креветками',
        price: 650,
        category: 'soup',
        count: '350 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNR10utl2i0WXcNJFdxwty7hLWEPX5DArDt3-owBOxvawUw0oEaKH7d9o&s=10',
        kind: 'fish'
    },
    {
        keyword: 'norwegian',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        count: '330 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeg_MiBpO7O3RzUDqkGPcXmhMhge8d-Dgtvm14Uqhi8g&s=10',
        kind: 'fish'
    },

    // ===== Главные блюда (рыбное 2, мясное 2, вегетарианское 2) =====
    {
        keyword: 'caesar',
        name: 'Цезарь в тортилье',
        price: 510,
        category: 'main',
        count: '350 г',
        image: 'https://img.iamcook.ru/2024/upl/recipes/cat/u-2785acc21dcc0136965220ef26801beb.JPG',
        kind: 'meat'
    },
    {
        keyword: 'carbonara',
        name: 'Карбонара',
        price: 490,
        category: 'main',
        count: '350 г',
        image: 'https://menunedeli.ru/wp-content/uploads/2022/09/Pasta-Karbonara-500%D1%85350.jpg.jpg',
        kind: 'meat'
    },
    {
        keyword: 'bowl',
        name: 'Азиатский боул',
        price: 510,
        category: 'main',
        count: '400 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgruCOeJIXxzNYGxBuJOEqydEKF9TwM3yQE2R5OdRYQpkabylBpDiNV0I&s=10',
        kind: 'veg'
    },
    {
        keyword: 'margherita',
        name: 'Пицца Маргарита',
        price: 450,
        category: 'main',
        count: '470 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfMab60CakXs94H7a9WjJJaVFpuMwcEeW1P3Eztt_bpSkAM0xBavoVVwR&s=10',
        kind: 'veg'
    },
    {
        keyword: 'fishcutlet',
        name: 'Рыбная котлета с рисом и спаржей',
        price: 320,
        category: 'main',
        count: '270 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzWo6CjXacsHH866PeouoWUlH0IEIHOhB20oADcnId-Dhnm0vkNxPQkY&s=10',
        kind: 'fish'
    },
    {
        keyword: 'shrimppasta',
        name: 'Паста с креветками',
        price: 340,
        category: 'main',
        count: '280 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyz5ftdRFWQbu1DqQOGxHbfigyVjJVV_h5CoDmORf9GbMu6fdWbq1pOom&s=10',
        kind: 'fish'
    },

    // ===== Салаты и стартеры (рыбный 1, мясной 1, вегетарианский 4) =====
    {
        keyword: 'korean',
        name: 'Корейский салат с овощами и яйцом',
        price: 330,
        category: 'salad',
        count: '250 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ20SqsIqeIsgz3jBPZbLMTInhE4qIKJ9Ci2OpwXnIfOYxEKTo6DmCbTfg&s=10',
        kind: 'veg'
    },
    {
        keyword: 'chickencaesar',
        name: 'Цезарь с цыпленком',
        price: 370,
        category: 'salad',
        count: '220 г',
        image: 'https://images.gastronom.ru/LoVJjeEYXJQ3vR2Yn8WtlivB0eZ78Rtu417zEnX1mZs/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2IxMzU5MzRkLWI1OTAtNDQ4Zi05MjA3LWQ5YzEzM2M2ODZlNy5qcGc.webp',
        kind: 'meat'
    },
    {
        keyword: 'caprese',
        name: 'Капрезе с моцареллой',
        price: 350,
        category: 'salad',
        count: '235 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK71C4j8jx_NmPyMgxRVVMlzvQ1_lBSrorBXXW9xowIU2h3b1F2zTlpEQ&s=10',
        kind: 'veg'
    },
    {
        keyword: 'tunasalad',
        name: 'Салат с тунцом',
        price: 480,
        category: 'salad',
        count: '230 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsYKNicrfcpIuGyUizFjb8EVr9G7-OfBRu29JlZPamrgdhXZgRuq2mUt1&s=10',
        kind: 'fish'
    },
    {
        keyword: 'friescaesar',
        name: 'Картофель фри с соусом Цезарь',
        price: 280,
        category: 'salad',
        count: '235 г',
        image: 'https://grandkulinar.ru/uploads/posts/2023-02/1676035337_pryanyj-kartofel-fri-s-syrnym-sousom.jpg',
        kind: 'veg'
    },
    {
        keyword: 'friesketchup',
        name: 'Картофель фри с кетчупом',
        price: 260,
        category: 'salad',
        count: '235 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYrD4d0zBhBbEHTKVB77Dcw48vPRwDtkF36rgJJEPYg&s=10',
        kind: 'veg'
    },

    // ===== Напитки (холодный 3, горячий 3) =====
    {
        keyword: 'fresh',
        name: 'Апельсиновый фреш',
        price: 350,
        category: 'drink',
        count: '350 мл',
        image: 'https://www.yamdiet.com/wp-content/uploads/02-6.jpg',
        kind: 'cold'
    },
    {
        keyword: 'smoothie',
        name: 'Ягодный смузи',
        price: 350,
        category: 'drink',
        count: '350 мл',
        image: 'https://images.gastronom.ru/UGFxAYkqQdXvno7l9Ox06NuU7NZBMwIPqvgeKQvAero/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2Q1ZjU2ZGY2LWE0N2EtNGJjOS04MGM5LTIyMGE4ZWYwYWJjMC5qcGc.webp',
        kind: 'cold'
    },
    {
        keyword: 'mors',
        name: 'Морс клюквенный',
        price: 350,
        category: 'drink',
        count: '350 мл',
        image: 'https://trad-vkusa.ru/wp-content/uploads/2019/12/morsy-1l.jpg',
        kind: 'cold'
    },
    {
        keyword: 'cappuccino',
        name: 'Капучино',
        price: 180,
        category: 'drink',
        count: '300 мл',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAprUbQ8EAXLUAV6UyKmIj-AMFKz27qb1OrwmO0LaZT1xZo-j1UOSOki4&s=10',
        kind: 'hot'
    },
    {
        keyword: 'greentea',
        name: 'Зелёный чай',
        price: 100,
        category: 'drink',
        count: '300 мл',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1F4yjqV47h4yd8Ba-IcqcbjKNfH0VicRNoloTv8ffccXfHhb4c_MbCuU&s=10',
        kind: 'hot'
    },
    {
        keyword: 'blacktea',
        name: 'Чёрный чай',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnU8s1NVIedbRluYXRKleFXhzp7vvugc2kP2WHuaBdQ&s=10',
        kind: 'hot'
    },

    // ===== Десерты (маленькая порция 3, средняя 2, большая 1) =====
    {
        keyword: 'cheesecake',
        name: 'Чизкейк',
        price: 240,
        category: 'dessert',
        count: '125 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnT-v58_bXo6gjMoJeEpkdAULnwvVMtWIH6a2Dw_OxQ&s=10',
        kind: 'small'
    },
    {
        keyword: 'chocolatecheesecake',
        name: 'Шоколадный чизкейк',
        price: 260,
        category: 'dessert',
        count: '125 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8R3c_U1XX6Vc4HVUPK3k3jjXrQVY_8LPNFKpUHLC4bQ&s=10',
        kind: 'small'
    },
    {
        keyword: 'donuts3',
        name: 'Пончики (3 штуки)',
        price: 410,
        category: 'dessert',
        count: '270 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWbkRz0qLEvCPoJRelJ3WvlFzPjUVIlXeyZ1FZNOWfw&s=10',
        kind: 'small'
    },
    {
        keyword: 'baklava',
        name: 'Пахлава',
        price: 220,
        category: 'dessert',
        count: '300 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhum0HIhqENWn67YrF-YyKi_rYizRgw4ijMz-ZlHcKxszcJfvxypk6Xac&s=10',
        kind: 'medium'
    },
    {
        keyword: 'chocolatecake',
        name: 'Шоколадный торт',
        price: 270,
        category: 'dessert',
        count: '250 г',
        image: 'https://craftology.ru/upload/resize_cache/iblock/c26/370_370_1/rdljsqu31bc3jna7fe3xj89tm9y2sgzc.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts6',
        name: 'Пончики (6 штук)',
        price: 720,
        category: 'dessert',
        count: '540 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6K8xwB60ploiahjx46MXg0xwoQuIdeKjXQnicxdKZ4rpd7KdznZd8Tsg&s=10',
        kind: 'large'
    }
];
