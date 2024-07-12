const API_URL1 = 'https://api.mercadolibre.com/sites/MLA/search?q=celulares';
const API_URL2 = 'https://api.mercadolibre.com/sites/MLA/search?q=notebook';
const API_URL = 'https://api.mercadolibre.com/sites/MLA/search?q=smartwatches';

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al realizar la solicitud a la API de Mercado Libre.');
                }
                return response.json();
            })
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const products = data.results.map(item => ({
                        id: item.id,
                        name: item.title.length > 60 ? `${item.title.substring(0, 60)}...` : item.title,
                        price: item.price,
                        img: item.thumbnail,
                        description: item.title,
                        stock: item.available_quantity,
                        category: item.category_id 
                    }));
                    resolve(products);
                } else {
                    reject(new Error('No hay productos disponibles.'));
                }
            })
            .catch(() => {
                reject(new Error(`Error al obtener productos.`));
            });
    });
};
