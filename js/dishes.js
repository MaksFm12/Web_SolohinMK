const dishes = [
    // ===== СУПЫ =====
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
        keyword: 'borsch_meat',
        name: 'Борщ мясной',
        price: 350,
        category: 'soup',
        count: '350 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCPCf8uL_AGY-uZJq_9gDksN7UNaokPn_SMtiC07a9n40zPIpoFGSPtwr&s=10',
        kind: 'meat'
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
        keyword: 'gaspacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        count: '350 г',
        image: 'https://goldniva.ru/upload/resize_cache/sprint.editor/f98/1024_768_1/ft8dsh0yp6m4fkfig6mkcjoo4jqlcl7a.jpeg',
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
        keyword: 'norwegian_soup',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        count: '330 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeg_MiBpO7O3RzUDqkGPcXmhMhge8d-Dgtvm14Uqhi8g&s=10',
        kind: 'fish'
    },

    // ===== ГЛАВНЫЕ БЛЮДА =====
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
        keyword: 'fish_cutlet',
        name: 'Рыбная котлета с рисом',
        price: 320,
        category: 'main',
        count: '270 г',
        image: 'https://ku-mir.ru/images/catalog/rybnaa-kotleta-s-risom-otvarnym-518.jpg',
        kind: 'fish'
    },
    {
        keyword: 'pasta_shrimp',
        name: 'Паста с креветками',
        price: 340,
        category: 'main',
        count: '280 г',
        image: 'https://avatars.mds.yandex.net/get-vertis-journal/4469561/0c8d635e-c64d-4a73-811c-359b244bc899.jpeg/1600x1600',
        kind: 'fish'
    },
    {
        keyword: 'pizza_margarita',
        name: 'Пицца Маргарита',
        price: 450,
        category: 'main',
        count: '470 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgmJN_62eAYPbHXIZKNB3vW6KIBcBWEmDaE0zYZeejMBX-PrDF_u9o9s&s=10',
        kind: 'veg'
    },
    {
        keyword: 'veggie_bowl',
        name: 'Вегетарианский боул',
        price: 420,
        category: 'main',
        count: '400 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgruCOeJIXxzNYGxBuJOEqydEKF9TwM3yQE2R5OdRYQpkabylBpDiNV0I&s=10',
        kind: 'veg'
    },

    // ===== САЛАТЫ И СТАРТЕРЫ =====
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
        keyword: 'caesar_salad',
        name: 'Цезарь с цыпленком',
        price: 370,
        category: 'salad',
        count: '220 г',
        image: 'https://images.gastronom.ru/LoVJjeEYXJQ3vR2Yn8WtlivB0eZ78Rtu417zEnX1mZs/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2IxMzU5MzRkLWI1OTAtNDQ4Zi05MjA3LWQ5YzEzM2M2ODZlNy5qcGc.webp',
        kind: 'meat'
    },
    {
        keyword: 'tuna_salad',
        name: 'Салат с тунцом',
        price: 480,
        category: 'salad',
        count: '250 г',
        image: 'https://hoff.ru/upload/medialibrary/b53/vtu12a1ti8yi71kqcxthv0ekh0yt6hzi.jpg',
        kind: 'fish'
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
        keyword: 'fries_caesar',
        name: 'Картофель фри с соусом Цезарь',
        price: 280,
        category: 'salad',
        count: '235 г',
        image: 'https://grandkulinar.ru/uploads/posts/2023-02/1676035337_pryanyj-kartofel-fri-s-syrnym-sousom.jpg',
        kind: 'veg'
    },
    {
        keyword: 'fries_ketchup',
        name: 'Картофель фри с кетчупом',
        price: 260,
        category: 'salad',
        count: '235 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYrD4d0zBhBbEHTKVB77Dcw48vPRwDtkF36rgJJEPYg&s=10',
        kind: 'veg'
    },

    // ===== НАПИТКИ =====
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
        keyword: 'apple_juice',
        name: 'Яблочный сок',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'https://icdn.lenta.ru/images/2025/08/07/14/20250807140824734/square_320_23e0196196be54e061876be6c72c24b9.jpg',
        kind: 'cold'
    },
    {
        keyword: 'carrot_juice',
        name: 'Морковный сок',
        price: 110,
        category: 'drink',
        count: '300 мл',
        image: 'https://s16.stc.all.kpcdn.net/family/wp-content/uploads/2022/07/morkovnyj-sok-polza-i-vred_oblogka_960-960x540.jpg',
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
        keyword: 'green_tea',
        name: 'Зелёный чай',
        price: 100,
        category: 'drink',
        count: '300 мл',
        image: 'https://aumishop.ru/image/catalog/-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-2020/polza-zelenogo-chaya.jpg',
        kind: 'hot'
    },
    {
        keyword: 'black_tea',
        name: 'Чёрный чай',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'https://здоровое-питание.рф/upload/iblock/042/2qgrd6tksvk1zm1t0tvshadic3xdze3h/-Kropotov-Lev-Fotobank-Lori-_1_.jpg',
        kind: 'hot'
    },

    // ===== ДЕСЕРТЫ =====
    {
        keyword: 'cheesecake',
        name: 'Чизкейк',
        price: 240,
        category: 'dessert',
        count: '125 г',
        image: 'https://art-lunch.ru/content/uploads/2014/08/cheesecake-new-york-001x2-1.jpg',
        kind: 'small'
    },
    {
        keyword: 'choco_cheesecake',
        name: 'Шоколадный чизкейк',
        price: 260,
        category: 'dessert',
        count: '125 г',
        image: 'https://s1.eda.ru/StaticContent/Photos/Upscaled/120420200719/120424122615/p_O.jpg',
        kind: 'small'
    },
    {
        keyword: 'baklava',
        name: 'Пахлава',
        price: 220,
        category: 'dessert',
        count: '300 г',
        image: 'https://menunedeli.ru/wp-content/uploads/2015/09/16-kl-pahlava.jpg',
        kind: 'medium'
    },
    {
        keyword: 'choco_cake',
        name: 'Шоколадный торт',
        price: 270,
        category: 'dessert',
        count: '140 г',
        image: 'https://www.vkusnyblog.com/wp-content/uploads/2018/01/shokoladnyi-shokoladnyi-tort.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts_3',
        name: 'Пончики (3 штуки)',
        price: 410,
        category: 'dessert',
        count: '350 г',
        image: 'https://ir.ozone.ru/s3/multimedia-5/c1000/6326767181.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts_6',
        name: 'Пончики (6 штук)',
        price: 650,
        category: 'dessert',
        count: '700 г',
        image: 'https://content2.flowwow-images.com/data/flowers/1000x1000/83/1787621351_39971283.jpg',
        kind: 'large'
    }
];