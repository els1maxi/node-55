let products = [];

export const getProducts = () => {
    return products;
};

export const getProductById = (id) => {
    return products.find(product => product.id === id);
};

export const addProduct = (product) => {
    products.push(product);
};

export const updateProduct = (id, updatedProduct) => {
    products = products.map(product => 
        product.id === id ? { ...product, ...updatedProduct } : product
    );
};

export const deleteProduct = (id) => {
    products = products.filter(product => product.id !== id);
};
