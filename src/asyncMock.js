const products = [
    // Celulares
    {
        id: 1,
        name: 'iPhone 15',
        price: 799.99,
        img: 'https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/12/iPhone15_Plus_Pink_PDP_Image_Position-1__MXLA.jpg',
        description: 'El último modelo de iPhone con A15 Bionic chip y cámara dual.',
        stock: 25,
        category: 'cellphone'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S21 Ultra',
        price: 699.99,
        img: 'https://riiing.com.ar/wp-content/uploads/2024/01/S21-Ultra-4-1024x1024.png',
        description: 'Un smartphone con pantalla AMOLED y cámara de alta resolución.',
        stock: 20,
        category: 'cellphone'
    },
    {
        id: 3,
        name: 'Google Pixel 6',
        price: 599.99,
        img: 'https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFTR2w3eHdSLUwuX0FDX1NMMTUwMF8uanBn.jpg',
        description: 'Smartphone con la mejor experiencia Android y cámara avanzada.',
        stock: 30,
        category: 'cellphone'
    },
    {
        id: 10,
        name: 'OnePlus 9',
        price: 749.99,
        img: 'https://i.ebayimg.com/thumbs/images/g/iKsAAOSwUHZmXnuE/s-l1200.jpg',
        description: 'Smartphone con cámara Hasselblad y carga rápida Warp Charge 65.',
        stock: 15,
        category: 'cellphone'
    },
    
    // Notebooks
    {
        id: 4,
        name: 'MacBook Air M1',
        price: 999.99,
        img: 'https://lyselectrohogar.com.ar/wp-content/uploads/2023/05/MacBook-Air-M1-8gb256-SSD-13.3-5.jpeg',
        description: 'Notebook ligera con el potente chip M1 de Apple.',
        stock: 15,
        category: 'notebook'
    },
    {
        id: 5,
        name: 'Dell XPS 13',
        price: 1099.99,
        img: 'https://www.comeros.com.ar/wp-content/uploads/2021/11/LATITUDE-3520-43.jpg',
        description: 'Una notebook premium con pantalla InfinityEdge y alto rendimiento.',
        stock: 10,
        category: 'notebook'
    },
    {
        id: 6,
        name: 'HP Spectre x360',
        price: 1299.99,
        img: 'https://acdn.mitiendanube.com/stores/001/474/949/products/14-fq1011la7-6315cb460af8f16b4616833246330891-1024-1024.jpg',
        description: 'Convertible 2-en-1 con diseño elegante y gran desempeño.',
        stock: 8,
        category: 'notebook'
    },
    {
        id: 11,
        name: 'Lenovo ThinkPad X1 Carbon',
        price: 1399.99,
        img: 'https://i5.walmartimages.com/seo/Lenovo-ThinkPad-X1-Yoga-Gen-6-Laptop-14-IPS-i7-1165G7-Iris-Xe-16GB-1TB_c326203b-3185-4ccf-8237-5941b61ed75b.200703c64f08b940bce27c1b545cde7d.jpeg',
        description: 'Notebook ultradelgada con excelente teclado y durabilidad.',
        stock: 12,
        category: 'notebook'
    },
    
    // Smartwatches
    {
        id: 7,
        name: 'Apple Watch Series 7',
        price: 399.99,
        img: 'https://carrello.com.ar/ecom/wp-content/uploads/2021/10/41-cell-alum-blue-sport-abyss-blue-s7.jpg',
        description: 'El smartwatch más avanzado de Apple con pantalla siempre activa.',
        stock: 40,
        category: 'smartwatch'
    },
    {
        id: 8,
        name: 'Samsung Galaxy Watch 4',
        price: 299.99,
        img: 'https://d2e6ccujb3mkqf.cloudfront.net/1ed8121c-2757-4cd4-9c28-50825e450920-1_80a1ec40-429d-48a6-8791-b2171c65ed12.jpg',
        description: 'Reloj inteligente con monitoreo de salud avanzado y diseño elegante.',
        stock: 35,
        category: 'smartwatch'
    },
    {
        id: 9,
        name: 'Fitbit Versa 3',
        price: 229.99,
        img: 'https://cdn11.bigcommerce.com/s-90rhh09dph/images/stencil/1280x1280/products/8317/6936/1000239703_ar_02_1024x10242x__98505.1710414634.jpg?c=1',
        description: 'Smartwatch con GPS incorporado y seguimiento de actividad las 24 horas.',
        stock: 25,
        category: 'smartwatch'
    },
    {
        id: 12,
        name: 'Garmin Venu 2',
        price: 349.99,
        img: 'https://stylewatch.vtexassets.com/arquivos/ids/214752/Smartwatch_Garmin_GA100249610_01.jpg?v=637897769528370000',
        description: 'Smartwatch con pantalla AMOLED y monitoreo de salud avanzado.',
        stock: 20,
        category: 'smartwatch'
    }
];


// Simular API
const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!products || products.length === 0) {
                reject('No products available');
            } else {
                resolve(products);
            }
        }, 1000);
    });
};

const getProductById = async (id) => {
    const products = await getProducts();
    console.log('Products:', products); // Verifica los datos
    console.log('Searching for ID:', id);
    const product = products.find(product => product.id == id);
    console.log('Found Product:', product);
    return product;
};


const getProductsByCategory = async (category) => {
    const products = await getProducts();
    return products.filter(product => product.category === category);
};

export { getProducts, getProductById, getProductsByCategory };
