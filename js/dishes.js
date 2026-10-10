const dishes = [
    // --- СУПЫ ---
    {
        keyword: 'borsch',
        name: 'Борщ',
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
        image: 'https://img.iamcook.ru/old/upl/recipes/misc/6ec883c208e212482909830dd8c2bfd4.jpg',
        kind: 'meat'
    },
    {
        keyword: 'gaspacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        count: '350 г',
        image: 'https://menunedeli.ru/wp-content/uploads/2022/07/4DB1A8F1-E90F-4D1E-8F7A-31C13A9E58BE-933x700.jpeg',
        kind: 'veg'
    },
    {
        keyword: 'mushroom_soup',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        count: '330 г',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcwG788i0Y4DEQPNHMsurHZHnhOf9GyPseLGnp6sr7rsjezLL7PVgXCU&s=10',
        kind: 'veg'
    },
    {
        keyword: 'norwegian_soup',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        count: '330 г',
        image: 'https://avatars.mds.yandex.net/get-vertis-journal/3911415/16304a00-595b-48b4-a2dc-71ccc056e652.jpg/1600x1600',
        kind: 'fish'
    },
    {
        keyword: 'tom_yam',
        name: 'Том ям с креветками',
        price: 650,
        category: 'soup',
        count: '500 г',
        image: 'https://static.1000.menu/img/content/23134/tom-yam-s-krevetkami-i-ryboi_1508585745_1_max.jpg',
        kind: 'fish'
    },

    // --- ГЛАВНЫЕ БЛЮДА ---
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
        image: 'https://cdn.dostaevsky.ru/storage/dostaevsky/bouly/boul-vegetarianskijj-large-rectangular-4ebfbfe7a9b54d8b8308f648b14f2045.jpeg',
        kind: 'veg'
    },

    // --- САЛАТЫ И СТАРТЕРЫ ---
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
        keyword: 'korean_salad',
        name: 'Корейский салат с овощами',
        price: 330,
        category: 'salad',
        count: '250 г',
        image: 'https://gorodovoy.ru/k2/news/577x320/upload/upload/news/585757212581.png',
        kind: 'veg'
    },
    {
        keyword: 'caprese',
        name: 'Капрезе с моцареллой',
        price: 350,
        category: 'salad',
        count: '235 г',
        image: 'https://img.iamcook.ru/2024/upl/recipes/zen/u-37adabf30d527ef3ef37d161764960c0.JPG',
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
        image: 'https://rp-suzdal.ru/files/catalog/products/kartofel-fri-s-ketchupom/120f4c67f0bab721789f8c89924f8694.png',
        kind: 'veg'
    },

    // --- НАПИТКИ ---
    {
        keyword: 'fresh',
        name: 'Апельсиновый фреш',
        price: 350,
        category: 'drink',
        count: '350 г',
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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvoIQTqOs0hQhkGp2bXUdOOyVH-OuAgKYnsjRM1VjlA&s',
        kind: 'hot'
    },
    {
        keyword: 'green_tea',
        name: 'Зеленый чай',
        price: 100,
        category: 'drink',
        count: '300 мл',
        image: 'https://aumishop.ru/image/catalog/-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-2020/polza-zelenogo-chaya.jpg',
        kind: 'hot'
    },
    {
        keyword: 'black_tea',
        name: 'Черный чай',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'https://здоровое-питание.рф/upload/iblock/042/2qgrd6tksvk1zm1t0tvshadic3xdze3h/-Kropotov-Lev-Fotobank-Lori-_1_.jpg',
        kind: 'hot'
    },

    // --- ДЕСЕРТЫ ---
    {
        keyword: 'baklava',
        name: 'Пахлава',
        price: 220,
        category: 'dessert',
        count: '300 г',
        image: 'https://menunedeli.ru/wp-content/uploads/2015/09/16-kl-pahlava.jpg',
        kind: 'small'
    },
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