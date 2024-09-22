import productRepository from '../repositories/productRepository.js';

const createProduct = async (productData) => {
    return productRepository.createProduct(productData);
};

export default {
    createProduct,
};
