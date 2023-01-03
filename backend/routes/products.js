const express = require("express");
const {
    createProduct,
    getProducts,
    getMobilePhones,
    getLaptops,
    getTelevision,
    getOthers,
    getProduct,
    deleteProduct,
    updateProduct,
} = require('../controllers/productController');


const router = express.Router(); 

//GET all products
router.get('/mobilephones', getMobilePhones);
router.get('/laptops', getLaptops);
router.get('/televisions', getTelevision);
router.get('/others', getOthers);
router.get('/', getProducts);

//GET a single product
router.get('/:id', getProduct);

//POST a new product
router.post('/', createProduct);

//DELETE a single product
router.delete('/:id', deleteProduct);

//UPDATE a product
router.patch('/:id', updateProduct)

module.exports = router;